import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [GetApiService]
})
export class MenuComponent implements OnInit{

  // search: string;
  pokemon: any;
  searchTerm = '';
  inputPadre: any;

  testForm = new FormGroup ({
    name: new FormControl()
  });

  items: Observable<string[]>;
  outputPadre () {
    console.log(this);
  }


  private searchTermStream = new Subject<string>();

  search(term: string) {
    this.searchTermStream.next(term);
    console.log(this.searchTermStream);
  }

  constructor(
    private getApiService: GetApiService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
  onclick(): void {
    console.log(this.searchTerm);
    this.getApiService.getPoke(this.searchTerm)
      .subscribe(
      res => this.pokemon = res,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
      );
  }

  getImage(id) {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';
  }

  getFicha(): void {
    this.router.navigate(['/pokemon', this.pokemon.id]);
    console.log(this.route);
  }
    ngOnInit() {
      console.log(this);
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.getApiService.getPoke(term));
  }

}
