import { movieTheatersDTO } from '../movie-theaters/movie-theaters.model';
import { genreDTO } from './../genres/genres.model';
export interface movieCreationDTO
{
    title:string;
    summary:string;
    poster:File;
    inTheaters:boolean;
    releaseDate:Date;
    trailer:string;
    genresIds:number[];
    movieTheatersIds:number[];
}

export interface movieDTO
{
    title:string;
    summary:string;
    poster:string;
    inTheaters:boolean;
    releaseDate:Date;
    trailer:string;
}

export interface MoviePostGetDTO{
  genres:genreDTO;
  movieTheaters:movieTheatersDTO;
}
