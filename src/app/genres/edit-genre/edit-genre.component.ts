import { genreDTO } from './../genres.model';
import { GenresService } from './../genres.service';
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute, Router } from '@angular/router';
    import { genreCreationDTO } from '../genres.model';

    @Component({
      selector: 'app-edit-genre',
      templateUrl: './edit-genre.component.html',
      styleUrls: ['./edit-genre.component.css']
    })
    export class EditGenreComponent implements OnInit {

      constructor(private activatedRoute:ActivatedRoute, private genreService:GenresService,private router:Router) { }

      model!: genreDTO;
      ngOnInit(): void {
        this.activatedRoute.params.subscribe(params=>{
          this.genreService.getById(params.id).subscribe(genre=>{
            this.model=genre;
          });

        });
      }
    //Event emiited value passed from child form-genre-creation to parent create-genre.component
      //to be displayed
      saveChanges(genreCreationDTO:genreCreationDTO)
        {
          this.genreService.edit(this.model.id,genreCreationDTO)
          .subscribe(()=>{
            this.router.navigate(["/genres"]);
          });
        }

    }
