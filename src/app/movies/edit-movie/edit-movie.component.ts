import { movieCreationDTO } from './../movies.model';
import { IndexActorsComponent } from './../../actors/index-actors/index-actors.component';
import { actorDTO, actorsMovieDTO } from './../../actors/actors.model';
import { multipleSelectorModel } from './../../utilities/multiple-selector/multiple-selector.model';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private moviesService:MoviesService,private router:Router) { }
  model:movieDTO;
  selectedGenres:multipleSelectorModel[];
  nonSelectedGenres:multipleSelectorModel[];
  selectedMovieTheaters:multipleSelectorModel[];
  nonSelectedMovieTheaters:multipleSelectorModel[];
  selectedActors:actorsMovieDTO[];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.moviesService.putGet(params.id).subscribe(putGetDTO=>{
        this.model=putGetDTO.movie

        this.selectedGenres=putGetDTO.selectedGenres.map(genre=>{
          return <multipleSelectorModel>{key:genre.id,value:genre.name}
          });

          this.nonSelectedGenres=putGetDTO.monSelectedGenres.map(genre=>{
            return <multipleSelectorModel>{key:genre.id,value:genre.name}
            });

          this.nonSelectedMovieTheaters=putGetDTO.nonSelectedMovieTheaters.map(movieTheater=>{
            return <multipleSelectorModel>{key:movieTheater.id,value:movieTheater.name}
            });

            this.selectedMovieTheaters=putGetDTO.selectedMovieTheaters.map(movieTheater=>{
              return <multipleSelectorModel>{key:movieTheater.id,value:movieTheater.name}
              });

              this.selectedActors=putGetDTO.actors;

      });
    });
  }

  saveChanges(movieCreationDTO:movieCreationDTO){
    this.moviesService.edit(this.model.id,movieCreationDTO).subscribe(()=>{
      this.router.navigate(['/movie/',this.model.id]);
    });
  }

}
