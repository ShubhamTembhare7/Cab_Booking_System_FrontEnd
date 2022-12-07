import { Component, OnInit } from '@angular/core';


import {RegistrationService} from '../registration.service';

  @Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  public registration:any={
    userName:'',
    emailAddress:'',
    password:'',
    contactNo:''
  }
 // registration: any ={Registration};
   //registration=Registration[];
  constructor(private registationService:RegistrationService) { }

  ngOnInit(): void {
   this.registration=this.registationService.getUser();
  }

}
