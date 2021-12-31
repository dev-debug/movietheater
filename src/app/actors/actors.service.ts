            import { observable, Observable } from 'rxjs';
            import { environment } from './../../environments/environment';
            import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
            import { actorCreationDTO, actorDTO, actorsMovieDTO } from './actors.model';
            import { Injectable } from '@angular/core';
            import { formatDateFormData } from '../utilities/utils';

            @Injectable({
              providedIn: 'root'
            })
            export class ActorsService {

              constructor(private http:HttpClient) { }
              private apiURL=environment.apiURL+"/actors";

              searchByName(name:string):Observable<actorsMovieDTO[]>{
                const headers=new HttpHeaders('Content-Type:application/json');
                return this.http.post<actorsMovieDTO[]>(`${this.apiURL}/searchByName`,JSON.stringify(name),{headers});
              }

              get(page:  number, recordsPerPage:number): Observable<any>{
                let params=new HttpParams()
                .append("page",page.toString())
                .append("recordsPerPage",recordsPerPage.toString());
              return this.http.get<actorDTO[]>(this.apiURL, {observe:'response',params});
              }

              getById(id:number){
                return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
              }
              create(actor: actorCreationDTO){
                const formData= this.buildFormData(actor);
                return this.http.post(this.apiURL,formData);
                }

              edit(id:number,actor:actorCreationDTO){
                const formData =this.buildFormData(actor);
                return this.http.put(`${this.apiURL}/${id}`,formData);
              }

              delete(id:number){
                return this.http.delete(`${this.apiURL}/${id}`);
              }

              private buildFormData(actor:actorCreationDTO) : FormData{
                const formData=new FormData();
                formData.append('name',actor.name);
                if(actor.biography){
                  formData.append('biography',actor.biography);
                }
                if(actor.dateOfBirth){
                  formData.append('dateOfBirth',formatDateFormData(actor.dateOfBirth));
                }
                if(actor.picture){
                  formData.append('picture',actor.picture);
                }
            return formData;
              }
            }
