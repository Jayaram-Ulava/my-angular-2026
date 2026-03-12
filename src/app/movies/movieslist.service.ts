import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})

export class MovieslistService {

constructor(private http:HttpClient){}

getmovieslist(page:number){

return this.http.get(
'https://jsonfakery.com/movies/paginated?limit=10&page='+page
);

}

searchmovieslist(term:string){

return this.http.get(
'https://jsonfakery.com/movies/paginated?search='+term
);

}

}