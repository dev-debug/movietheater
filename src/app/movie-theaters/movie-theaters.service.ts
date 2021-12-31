import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieTheatersCreationDTO } from './movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }
  private apiURL=environment.apiURL+"/movieTheaters";
  public create(movieTheaterDTO:movieTheatersCreationDTO){
  return this.http.post(this.apiURL,movieTheaterDTO);
  }
}
