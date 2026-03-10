import { Component } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {

  maillist:any=[];

  constructor(private gethttpmails:MailsService){
    this.getmailsall();
  }

  // add a new mail item when "Add one" button is clicked
 
  

getmailsall(){
  this.gethttpmails.getmails().subscribe((maildata:any)=>{
    console.log(maildata)
    this.maillist=maildata;
  })
}

}
