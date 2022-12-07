import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public addregistration(reg:any){
    return this.http.post(`http://localhost:9091/register/addRegistration`,reg);
  }

  public logincred(reg:any){
    return this.http.post(`http://localhost:9091/register/loginCustomer`,reg);
  }

  public getbyemailId(emailAddress:any){
    return this.http.get(`http://localhost:9091/register/findByEmail/${emailAddress}`);
  }

  public getallregistration(){
    return this.http.get(`http://localhost:9091/register/getAllRegistration`);
  }


  //For storing data in browser localStorage
  public setUser(user:any){

    //localStorage.setItem('user',JSON.stringify(user));
    sessionStorage.setItem('user',JSON.stringify(user));

  }



  //For getting data from browser localStorage
  public getUser(){

    //let userStr=localStorage.getItem("user");

    let userStr=sessionStorage.getItem("user");


    if(userStr!=null){

      return JSON.parse(userStr);

    }

    else{

      this.logout();

      return null;

    }

  }

  public logout(){

   

    //localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    return true;

  }

  public checkadmin(){

    let isadmin=false;

    try{

      isadmin=this.getUser().admin;

    }

    catch{}

    if(isadmin==true){

      return true;

    }

    else{

      return false;

    }

  }


}
