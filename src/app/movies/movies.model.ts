import { actorsMovieDTO, actorDTO } from './../actors/actors.model';
import { movieTheatersDTO } from '../movie-theaters/movie-theaters.model';
import { genreDTO } from './../genres/genres.model';
import { SafeResourceUrl } from '@angular/platform-browser';
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
    actors:actorsMovieDTO[];
}

export interface movieDTO
{
    id: number;
    title:string;
    summary:string;
    poster:string;
    inTheaters:boolean;
    releaseDate:Date;
    trailer:string;
    genres:genreDTO[];
    movieTheaters:movieTheatersDTO[];
    actors:actorsMovieDTO[];
    trailerURL: SafeResourceUrl;
    averageVote:number;
    userVote:number;

}

export interface MoviePostGetDTO{
  genres:genreDTO;
  movieTheaters:movieTheatersDTO;
}

export interface HomeDTO{
 upcomingReleases:movieDTO[];
 inTheaters:movieDTO[];
}
export interface MoviePutGetDTO{
movie:movieDTO;
selectedGenres:genreDTO[];
monSelectedGenres:genreDTO[];
selectedMovieTheaters:movieTheatersDTO[];
nonSelectedMovieTheaters:movieTheatersDTO[];
actors:actorsMovieDTO[];
}
