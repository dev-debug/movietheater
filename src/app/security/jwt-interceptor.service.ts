import { SecurityService } from 'src/app/security/security.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  constructor(private securityService:SecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.securityService.getToken();
    if(token){
      req=req.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
      });
    }
    return next.handle(req);
  }
}
