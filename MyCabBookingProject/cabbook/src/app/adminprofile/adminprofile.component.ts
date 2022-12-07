import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  public registration:any={
    userName:'',
    emailAddress:'',
    password:'',
    contactNo:''
  }

  constructor(private registationService:RegistrationService) { }

  ngOnInit(): void {
    this.registration=this.registationService.getUser();
  }

}
