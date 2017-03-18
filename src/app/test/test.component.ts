import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

@Input() inputHijo: any;
@Output() outputHijo: EventEmitter<any> = new EventEmitter<any>();

testEvento: boolean;
// outputHijo = true;
onClick(){
  this.testEvento = true;
  console.log(this);
  this.outputHijo.emit(this);
}

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    for (let propName in changes) {
      console.log(changes);
      console.log(propName);
      /*let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
    }
  }
}
