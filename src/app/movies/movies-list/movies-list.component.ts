import { movieDTO } from './../movies.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  // movies!: { title: string; releaseDate: Date; price: number; }[];

  ngOnInit(): void {
  }

    @Input()
  movies: movieDTO[];

  @Output()
  onDelete: EventEmitter<void> = new EventEmitter<void>();

  delete(movieId: number): void {
    this.movieService.delete(movieId)
    .subscribe (() => {
      this.onDelete.emit();
    });
  }


  // remove(index: number)
  // {
  //   this.movies.splice(index,1);
  // }


}
