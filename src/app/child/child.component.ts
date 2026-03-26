import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  

@Input()child:string='';
parentone:string='';

@Output() Bevent:EventEmitter<string> = new EventEmitter();
newemit() {
  this.Bevent.emit(this.parentone);
}

}
