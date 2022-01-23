import { Observable } from 'rxjs';
import { authenticationResponse, userCredentisals, userDTO } from './security.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http:HttpClient) { }
  private apiURL=environment.apiURL+"/accounts";
  private readonly expirationTokenKey:string='token-expiration';
  private readonly tokenKey:string='token';
  private readonly roleField:string='role';

  isAuthenticated():boolean{
    const token = localStorage.getItem(this.tokenKey);

    if(!token){
      return false;
    }
    const expiration=localStorage.getItem(this.expirationTokenKey);
    const expirstionDate=new Date(expiration);
    if(expirstionDate<=new Date){
      this.logout();
      return false;
    }
    return true;
  }

  getFieldFromJWT(field:string):string{
const token=localStorage.getItem(this.tokenKey);
if(!token){return '';}
const dataToken=JSON.parse(atob(token.split('.')[1]));
return dataToken[field];
  }
  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey)
  }
  getRole():string{
    return this.getFieldFromJWT(this.roleField);
  }

  saveToken(authenticationResponse:authenticationResponse){
    localStorage.setItem(this.tokenKey,authenticationResponse.token);
    localStorage.setItem(this.expirationTokenKey,authenticationResponse.expiration.toString());
  }
  register(userCredentisals:userCredentisals): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL+"/create",userCredentisals);
  }
  login(userCredentisals:userCredentisals): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL+"/login",userCredentisals);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  getUsers(page:number, recordsPerPage:number):Observable<any>{
    let params=new HttpParams();
    params=params.append('page',page.toString());
    params=params.append('recordsPerPage,',recordsPerPage.toString());
    return this.http.get<userDTO[]>(`${this.apiURL}/listusers`,{observe:'response',params});

  }
  makeAdmin(userId:string){
   const headers= new HttpHeaders('Content-Type: application/json');
   return this.http.post(`${this.apiURL}/makeadmim`,JSON.stringify(userId),{headers});
  }
  removeAdmin(userId:string){
    const headers= new HttpHeaders('Content-Type: application/json');
    return this.http.post(`${this.apiURL}/removeadmim`,JSON.stringify(userId),{headers});
   }
}
