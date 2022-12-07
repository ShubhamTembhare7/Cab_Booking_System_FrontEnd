import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.css']
})
export class AllbookingComponent implements OnInit {

  public booking:any={

    source:'',
    destination:'',
    startDate:'',
    endDate:'',
    driverId:'',
    registrationId:'',
    userId:''
  

  }

  
  

  constructor(private bookingService:BookingService,private regservice:RegistrationService) { }

  ngOnInit(): void {

    if(this.regservice.checkadmin()){
      console.log("inside admin")
      this.bookingService.getAllBooking().subscribe(
          (data)=>this.booking=data
       )
    }
    else{
      this.bookingService.getBookingByuserId(this.regservice.getUser().registrationId).subscribe(
        (data)=>{
          this.booking=data
          console.log(this.booking);
        }
      )
    }

    

    
    

    
  }

}
