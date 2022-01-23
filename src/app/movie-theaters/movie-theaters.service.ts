import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theaters.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }
  private apiURL=environment.apiURL+"/movietheaters";

  public get() : Observable<movieTheatersDTO[]>{
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }
  public create(movieTheaterDTO:movieTheatersCreationDTO){
  return this.http.post(this.apiURL,movieTheaterDTO);
  }

  public getById(id:number):Observable<movieTheatersDTO>{
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  // public delete(id:number) {
  //   return this.http.delete(`${this.apiURL}/${id}`);
  // }

  public edit(id:number, movieTheaterDTO:movieTheatersCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`,movieTheaterDTO);
  }

  public delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
