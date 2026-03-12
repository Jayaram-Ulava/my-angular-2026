import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';

@Component({
selector: 'app-movieslist',
templateUrl: './movieslist.component.html',
styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent {

moviesdisplay:any[]=[];
searchValue:string='';

currentPage:number=1;
totalPages:number=10;

constructor(private movieService:MovieslistService){
this.getmovies();
}

getmovies(){

this.movieService.getmovieslist(this.currentPage)
.subscribe((res:any)=>{

this.moviesdisplay=res.data;

});

}

search(){

if(this.searchValue.trim()==""){

this.getmovies();
return;

}

this.movieService.searchmovieslist(this.searchValue)
.subscribe((res:any)=>{

this.moviesdisplay=res.data;

});

}

pagebutton(page:number){

this.currentPage=page;
this.getmovies();

}

nextPage(){

if(this.currentPage < this.totalPages){

this.currentPage++;
this.getmovies();

}

}

prevPage(){

if(this.currentPage > 1){

this.currentPage--;
this.getmovies();

}

}

}