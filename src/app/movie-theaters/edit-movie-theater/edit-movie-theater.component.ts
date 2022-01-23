import { MoviesService } from './../../movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
     private mvieTheaterService:MovieTheatersService,
     private router:Router) { }

  model: movieTheatersDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.mvieTheaterService.getById(params.id).subscribe(movieTheater=> this.model=movieTheater);
    });
  }

  saveChanges(movieTheater:movieTheatersCreationDTO){
    this.mvieTheaterService.edit(this.model.latitude,movieTheater).subscribe(()=>
    this.router.navigate(['/movietheaters'])
    );
  }

}
