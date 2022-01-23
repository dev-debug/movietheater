import { MovieTheatersService } from './../movie-theaters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService:MovieTheatersService) { }
  movieTheaters;
  displayColumns=['name','actions'];

  ngOnInit(): void {
    this.loadData();

  }
  loadData(){
    this.movieTheaterService.get().subscribe(movieTheaters=>this.movieTheaters=movieTheaters);

  }

  delete(id:number){
    this.movieTheaterService.delete(id).subscribe(()=>{
      this.loadData();
    });
  }

}
