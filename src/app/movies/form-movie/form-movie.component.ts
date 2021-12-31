import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  onSaveChanges=new EventEmitter<movieCreationDTO>();
  @Input()
  nonSelectedGenres: multipleSelectorModel[]=[];

  selectedGenres: multipleSelectorModel[]=[];

  @Input()
  nonSelectedMovieTheaters: multipleSelectorModel[]=[];

  selectedMovieTheaters: multipleSelectorModel[]=[];

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
      movieTheatersIds:''
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }

onImageSelected(file:File){
  this.form.get('poster')?.setValue(file);
}
saveChanges(){
  // this.onSaveChanges.emit(this.form.value);
  const genresIds = this.selectedGenres.map(value=>value.key);
  this.form.get('genresIds')?.setValue(genresIds);
  const movieTheatersIds = this.selectedMovieTheaters.map(value=>value.key);
  this.form.get('movieTheatersIds')?.setValue(movieTheatersIds);
  this.onSaveChanges.emit(this.form.value);

}
changeMarkdown(content:string){
  this.form.get('summary')?.setValue(content);
}


}
