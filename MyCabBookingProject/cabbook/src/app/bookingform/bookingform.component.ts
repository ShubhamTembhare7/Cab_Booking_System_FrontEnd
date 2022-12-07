import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

public userName:any;
public driverId:any;
public booking:any={
	 source:'',
	 destination:'',
	 startDate:'',
	 endDate:'',
   userId:''
    
   
  }

  public driverinfo:any=
  {
    driverId:'',
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    driverVehicleNo:'',
    vehicleName:'',
    modelName:''
  }

  constructor(private ar:ActivatedRoute,private driverinfos:DriverinfoService,private regservice:RegistrationService,private bookservice:BookingService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.ar.snapshot.params['id']);
    this.driverinfos.getdriverbyid(this.ar.snapshot.params['id']).subscribe(
      (data:any)=>{
        console.log(data);
          this.driverinfo=data;
          this.driverId=this.driverinfo.driverId;
      }
    )

    this.userName=this.regservice.getUser().userName;
  }


  Bookcab(){
    this.booking.userId=this.regservice.getUser().registrationId;
   console.log(this.driverId)
    this.bookservice.addBooking(this.booking,this.driverId,this.booking.userId).subscribe(
      (data:any)=>{
        alert("Book Successfully!");
        this.router.navigate(['/firstpage/payment/'+this.driverId]);
      },
      (Error:any)=>{
        alert("Error");
      }
    )
  }
  

}
