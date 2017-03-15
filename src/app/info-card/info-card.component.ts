import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  // test = this;
  private resolve: Object;
  name: string;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.test);
    // console.log(this.route);
    // console.log(this.router);
    // console.log(this.route.data);
    this.route.data
      .subscribe(resolve => {
        this.resolve = resolve;
      });
      console.log(this);
    console.log(this.resolve);
  }

}
