import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [GetApiService]
})
export class MenuComponent {

  // search: string;
  pokemon: any;
  searchTerm = '';

  constructor(private getApiService: GetApiService) {

  }
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

}
