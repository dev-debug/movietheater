import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

ngOnInit(): void {

}

shouldRedirectToUser(): boolean{
  if (this.securityService.isAuthenticated()){
    return true;
  }

  console.log(this.router.url);
  console.log(this.activatedRoute.url);

  return false;
}



}
