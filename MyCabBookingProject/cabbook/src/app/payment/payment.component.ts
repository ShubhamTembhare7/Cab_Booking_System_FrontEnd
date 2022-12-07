import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { DriverinfoService } from '../driverinfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public userName:any;

  public Payment=
  {
    cardNumber:'',
    expiryDate:'',
    cvvNumber:''
  }
  public driverinfo:any;

  constructor(private payservice:PaymentService,private ar:ActivatedRoute,private driverinfos:DriverinfoService,private regservice:RegistrationService,private router:Router) { }

  ngOnInit(): void {

    
    this.driverinfos.getdriverbyid(this.ar.snapshot.params['driverId']).subscribe(
      (data)=>{
        this.driverinfo=data;
      }
    )
    console.log(this.driverinfo)
    this.userName=this.regservice.getUser().userName;
  }

  public pay()
{
console.log(this.Payment);
this.payservice.addPayment(this.Payment).subscribe(
      
  (data:any)=>{
    
    alert("Payment Successfully!");
    this.router.navigate(['/firstpage']);
  },
  (error:any)=>{
    alert("Error while adding payment!");
  }

)
}

}
