import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { SecurityService } from './../security.service';
import { Component, OnInit } from '@angular/core';
import { userCredentisals } from '../security.models';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService:SecurityService,private router:Router) { }


  ngOnInit(): void {
  }
  errors:string[]=[];

  register(userCredentials:userCredentisals): void{
    this.errors=[];
    this.securityService.register(userCredentials).subscribe(authenticationResponse=>{
     this.securityService.saveToken(authenticationResponse);
     this.router.navigate(['/']);
    },error=>this.errors=parseWebAPIErrors(error));



  }


}
