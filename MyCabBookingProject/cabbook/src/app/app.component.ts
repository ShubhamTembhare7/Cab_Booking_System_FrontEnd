import { Component } from '@angular/core';


import { Route, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cabbook';

  
/* constructor(public service:RegistrationserviceService, public rout:Route)
 {

 }*/
  ngOnInit():void{

  }
  //msg:"";
  public  registartionForRemote()
  {}
}
