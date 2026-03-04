import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
name:string='';
user:string[]=[];

  register() {
this.user.push(this.name);
  }

  delete(i:number) {
    this.user.splice(i,1);
  }
}
