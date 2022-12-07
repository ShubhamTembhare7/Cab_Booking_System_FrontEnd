import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isadmin=false;
  public login={
    emailAddress:'',
    password:''
  }

  public user={
    registrationId: '',
    userName:'',
    emailAddress: '',
    password: '',
    contactNo: '',
    admin:false
  }
msg='';
  constructor(private regservice:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  Logincall(){
    this.regservice.logincred(this.login).subscribe(
      (data:any)=>{
  
        
        this.user=data;
        this.regservice.setUser(this.user);
        this.isadmin=this.user.admin;
        console.log(this.isadmin);
        if(this.isadmin){
        this.router.navigate(['/adminpage']);
        }
        else{
          this.router.navigate(['/firstpage']);
        }
  
  
       
  
      },
      (error:any)=>{
        alert("Invlaid EmailId & Password!");
      }
    )
    }

  
}

