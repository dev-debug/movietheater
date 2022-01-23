import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder:FormBuilder) {
  }

  @Input()
  model!: movieDTO;

  ////
  @Output ()
  OnSubmit: EventEmitter <movieCreationDTO> = new EventEmitter<movieCreationDTO>();
/////////////
  // onSaveChanges=new EventEmitter<movieCreationDTO>();
  @Input()
  nonSelectedGenres: multipleSelectorModel[]=[];

  @Input()
  selectedGenres: multipleSelectorModel[]=[];

  @Input()
  nonSelectedMovieTheaters: multipleSelectorModel[]=[];

  @Input()
  selectedMovieTheaters: multipleSelectorModel[]=[];

  @Input()
  selectedActors : actorsMovieDTO[] = [];

//////
imageChanged = false;

////
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:['',{
        validators:[Validators.required]
      }],
      summary:'',
      inTheaters:false,
      trailer:'',
      releaseDate:'',
      poster:'',
      genresIds:'',
      movieTheatersIds:'',
      actors:''
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }

onImageSelected(file:File){
  this.form.get('poster')?.setValue(file);
  this.imageChanged = true;

}

// saveChanges(){
//   // this.onSaveChanges.emit(this.form.value);
//   const genresIds = this.selectedGenres.map(value=>value.key);
//   this.form.get('genresIds')?.setValue(genresIds);
//   const movieTheatersIds = this.selectedMovieTheaters.map(value=>value.key);
//   this.form.get('movieTheatersIds')?.setValue(movieTheatersIds);
//   // this.onSaveChanges.emit(this.form.value);
//   const actors =this.selectedActors.map(val=>{
//     return {id: val.id, character:val.character}
//   });
//   this.form.get('actors').setValue(actors);
//   this.onSaveChanges.emit(this.form.value);
// }


saveChanges() {
  const genresIds = this.selectedGenres.map (val => val.key);
  this.form.get ('genresIds').setValue (genresIds);

  const movieTheatersIds = this.selectedMovieTheaters.map (val => val.key);
  this.form.get ('movieTheatersIds').setValue (movieTheatersIds);

  const actors = this.selectedActors.map (val => {
    return {id: val.id, character: val.character}
  });
  this.form.get ('actors').setValue (actors);

  if (!this.imageChanged) {
    this.form.patchValue ({'poster': null});
  }

  this.OnSubmit.emit (this.form.value);
}


changeMarkdown(content:string){
  this.form.get('summary')?.setValue(content);
}


}
