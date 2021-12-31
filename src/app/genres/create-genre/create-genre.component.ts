import { genreCreationDTO } from './../genres.model';
import { GenresService } from './../genres.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { parseWebAPIErrors } from 'src/app/utilities/utils';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  errors: string []=[];

  constructor(private router: Router, private genreService:GenresService)
  { }


  ngOnInit(): void {

  }


  //Event emiited value passed from child form-genre-creation to parent create-genre.component
  //to be displayed
  saveChanges(genreCreationDTO:genreCreationDTO)
    {
      this.genreService.create(genreCreationDTO).subscribe(()=>{
        this.router.navigate(['/genres']);
      },error=>this.errors=parseWebAPIErrors(error));
    }


  // form!: FormGroup;
  // ngOnInit(): void {
  //   this.form= this.formBuilder.group({
  //     name:['',[Validators.required, Validators.minLength(3),firstLetterUppercase()]]
  //   });
  // }

  // getErrorMessageFieldName()
  // {
  //   const field= this.form.get("name");
  //   if(field?.hasError("required"))
  //   {
  //     return "The name field is required";
  //   }
  //   if(field?.hasError("minLength")){
  //   return "The minimum length is 3"
  //   }
  //   if(field?.hasError('firstLetterUppercase')){
  //    return field.getError('firstLetterUppercase').message;
  //   }
  //   return '';
  // }

  }
