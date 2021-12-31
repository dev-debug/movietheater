import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form!: FormGroup;

  movies=[
    {
      title:"Captain America",
      releaseDate:new Date("07-24-2011"),
      price: 199.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg'
    },
    {
      title:"Hulk",
      releaseDate:new Date("03-15-2009"),
      price: 99.99,
      poster: 'https://m.media-amazon.com/images/I/71Y0aoTDEJL._SY445_.jpg'
    },
    {
      title:"Spider-Man",
      releaseDate:new Date("04-27-2001"),
      price: 99.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg'
    },
    {
      title:"Avengers",
      releaseDate:new Date("07-25-2019"),
      price: 199.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    }
     
  ]
  genres=[{id:1,name:'Drama'},{id:2,name:'Action'}];
  originalMovies=this.movies;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
    title:'',
      genreId:0,
      upcomingReleases:false,
      inTheatres:false
    });
    this.form.valueChanges.subscribe(values=>{
      // console.log(values);
      this.movies=this.originalMovies;
      this.filterMovies(values);
    });

  }

  filterMovies(values:any){
  if(values.title)  {
    this.movies=this.movies.filter(movies=>movies.title.indexOf(values.title) !== -1);
  }
  }

clearForm(){
  this.form.reset();

  
}
}
