import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private regservice:RegistrationService) { }

  ngOnInit(): void {
  }

  signUp(){
    
    this.router.navigate(['/registration']);
  }
  Logout(){
    this.regservice.logout();
    this.router.navigate(['']);
  }

}
