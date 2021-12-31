import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }
  // movies!: { title: string; releaseDate: Date; price: number; }[];

  ngOnInit(): void {
  }
  
  


  @Input()
  movies: { title: string; releaseDate: Date; price: number; }[] = [];

  remove(index: number)
  {
    this.movies.splice(index,1);
  }
}