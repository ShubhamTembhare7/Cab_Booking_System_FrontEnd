import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { HttpClientModule } from '@angular/common/http';
import { CustomerformComponent } from './customerform/customerform.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DriverformComponent } from './driverform/driverform.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { AllcustomersComponent } from './allcustomers/allcustomers.component';
import { AlldriverComponent } from './alldriver/alldriver.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { AllcarComponent } from './allcar/allcar.component';
import {MatSelectModule} from '@angular/material/select';
import { CabapprovalComponent } from './cabapproval/cabapproval.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerformComponent,
    DashboardComponent,
    HomepageComponent,
    FirstpageComponent,
    SidebarComponent,
    NavbarComponent,
    AdminpageComponent,
    DriverformComponent,
    CustomerprofileComponent,
    AllcustomersComponent,
    AlldriverComponent,
    AdminprofileComponent,
    BookingformComponent,
    AllbookingComponent,
    CardetailsComponent,
    AllcarComponent,
    CabapprovalComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
