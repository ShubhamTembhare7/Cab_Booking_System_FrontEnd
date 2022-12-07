import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-allcustomers',
  templateUrl: './allcustomers.component.html',
  styleUrls: ['./allcustomers.component.css']
})
export class AllcustomersComponent implements OnInit {

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
    this.registationService.getallregistration().subscribe(
      (data)=>{
  
  this.registration=data;
  console.log(this.registration);
}

    )
  }

}
