import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //this.movies=[];
      this.moviesInTheaters = [
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
       
    ];
  
    //  this.moviesFutureReleases;
      
      this.moviesFutureReleases=[];
  
  }
  moviesInTheaters: { title: string; releaseDate: Date; price: number; poster: string; }[] = [];
  moviesFutureReleases: any;
  
}
