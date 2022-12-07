import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverinfoService } from '../driverinfo.service';
@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.css']
})
export class AllcarComponent implements OnInit {

  public driver:any={
    driverId:'',
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    vehicleName:'',
    modelName:'',
    driverVehicleNo:'',
    price:''
  }

  constructor(private driverinfoservice:DriverinfoService,private router:Router) { }

  ngOnInit(): void {

    this.driverinfoservice.getallDriverinfo().subscribe(
      (data)=>this.driver=data
    )
  }

  Booknow(id:any){
    console.log(id);
    this.router.navigate(["/firstpage/bookingform/"+id]);

  }


}
