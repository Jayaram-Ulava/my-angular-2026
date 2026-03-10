import { Component } from '@angular/core';
import { MailsService } from '../mails.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
})
export class MailsComponent {

  maillist:any=[];

  constructor(private gethttpmails:MailsService){
    this.getmailsall();
  }
getmailsall(){
  this.gethttpmails.getmails().subscribe((maildata:any)=>{
    console.log(maildata)
    this.maillist=maildata;
  })
}

}
