import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  model: movieTheatersDTO = {name:'AuroraS',latitude:41.79246121678613,longitude:-88.32459104657387}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
    });
  }

  saveChanges(movieTheater:movieTheatersCreationDTO){

  }

}
