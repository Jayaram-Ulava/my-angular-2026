import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private httpmails:HttpClient) { }

  getmails() {
    return this.httpmails.get('https://jsonplaceholder.typicode.com/todos');
  }
}
