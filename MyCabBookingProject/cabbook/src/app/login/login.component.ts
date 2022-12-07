import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isadmin=false;
  /*public login={
    emailAddress:'',
    password:''
  }*/
  loginForm=new FormGroup({
   emailAddress:new FormControl('',[Validators.required,Validators.email]),
   password:new FormControl('',[Validators.required])
  })

  public user={
    registrationId: '',
    userName:'',
    emailAddress: '',
    password: '',
    contactNo: '',
    admin:false
  }
  constructor(private regservice:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  get emailAddress()
  {
return this.loginForm.get('emailAddress');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  Logincall(){
  this.regservice.logincred(this.loginForm.value).subscribe(
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
