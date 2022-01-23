import Swal from 'sweetalert2';
import { HttpResponse } from '@angular/common/http';
import { userDTO } from './../security.models';
import { SecurityService } from 'src/app/security/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  constructor(private securityService:SecurityService) { }
  users:userDTO[];
  page:number=1;
  pageSize:number=10;
  totalAmountOfRecords;
  columnsToDisplay=["email","actions"];
  ngOnInit(): void {
    this.securityService.getUsers(this.page,this.pageSize).subscribe((httpResponse:HttpResponse<userDTO[]>)=>{
      this.users=httpResponse.body;
      this.totalAmountOfRecords=httpResponse.headers.get("totalAmountOfRecords");
    });
  }

  makeAdmin(userId:string){
this.securityService.makeAdmin(userId).subscribe(()=>{
  Swal.fire("Success","The operation was successful","success");
});
  }
removeAdmin(userId:string){
  this.securityService.removeAdmin(userId).subscribe(()=>{
    Swal.fire("Success","The operation was successful","success");
  });
  }

}
