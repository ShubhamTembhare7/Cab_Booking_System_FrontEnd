import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { AllcarComponent } from './allcar/allcar.component';
import { AllcustomersComponent } from './allcustomers/allcustomers.component';
import { AlldriverComponent } from './alldriver/alldriver.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { CabapprovalComponent } from './cabapproval/cabapproval.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverformComponent } from './driverform/driverform.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IsloginGuard } from './islogin.guard';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent},
  { path: "payment", component: PaymentComponent },
  { path: "registration", component: CustomerformComponent },
  {
    path: "adminpage",
    component: AdminpageComponent,
    canActivate: [IsloginGuard],
    children: [
      {
        path: "allcustomers",
        component: AllcustomersComponent

      },
      {
        path: "cabapproval",
        component: CabapprovalComponent

      },
      {
        path: "cardetails",
        component: CardetailsComponent

      },
      {
        path: "driverform",
        component: DriverformComponent

      },
      {
        path: "alldriver",
        component: AlldriverComponent

      },
      {
        path: "adminprofile",
        component: AdminprofileComponent

      },
      {
        path: "allbooking",
        component: AllbookingComponent

      },
      {
        path: "driverform/:id",
        component: DriverformComponent

      }


    ]

  },
  {
    path: "driverform",
    component: DriverformComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "adminprofile",
    component: AdminprofileComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "customerprofile",
    component: CustomerprofileComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "allcustomers",
    component: AllcustomersComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "alldriver",
    component: AlldriverComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "bookingform",
    component: BookingformComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "allbooking",
    component: AllbookingComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "allcar",
    component: AllcarComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "cardetails",
    component: CardetailsComponent,
    canActivate: [IsloginGuard]
  },
  {
    path: "firstpage",
    component: FirstpageComponent,
    canActivate: [IsloginGuard],
    children: [
      {
        path: "homepage",
        component: HomepageComponent

      },
      {
        path: "payment/:driverId",
        component: PaymentComponent

      },
      {
        path: "customerprofile",
        component: CustomerprofileComponent

      },
      {
        path: "customerprofile/:id",
        component: CustomerprofileComponent

      },
      {
        path: "bookingform",
        component: BookingformComponent

      },
      {
        path: "allbooking",
        component: AllbookingComponent

      },
      {
        path: "allcar",
        component: AllcarComponent

      },
      {
        path: "bookingform/:id",
        component: BookingformComponent

      }


    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
