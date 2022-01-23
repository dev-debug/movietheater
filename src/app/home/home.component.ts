import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {

   this.loadData();
  }
  moviesFutureReleases;
  moviesInTheaters;
  loadData(){
    this.moviesService.getHomePageMovies().subscribe(homeDTO=>{
      this.moviesFutureReleases=homeDTO.upcomingReleases;
      this.moviesInTheaters=homeDTO.inTheaters;

    });

  }

  onDelete(){
    this.loadData();
  }
}
