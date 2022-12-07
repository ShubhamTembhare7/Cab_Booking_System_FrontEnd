import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

public Registration={
  userName:'',
  emailAddress:'',
  password:'',
  contactNo:''
}

  constructor(private regservice:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  Signup(){
    console.log(this.Registration);

    this.regservice.addregistration(this.Registration).subscribe(
      
      (data:any)=>{
        
        alert("Data inserted");
        this.router.navigate(['']);
      },
      (error:any)=>{
        alert("Error while inserting");
      }

    )
  }


}
