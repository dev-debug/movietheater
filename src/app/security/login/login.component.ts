import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { Router } from '@angular/router';
import { userCredentisals, authenticationResponse } from './../security.models';
import { SecurityService } from './../security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService:SecurityService,private router:Router) { }
errors:string[]=[];
  ngOnInit(): void {
  }
login(userCredentisals:userCredentisals){
this.securityService.login(userCredentisals).subscribe(authenticationResponse=>{
this.securityService.saveToken(authenticationResponse);
this.router.navigate(['/']);
},error=>this.errors=parseWebAPIErrors(error));

}
}
