import { Component, OnInit } from '@angular/core';
import { DriverinfoService } from '../driverinfo.service';
@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

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

  constructor(private driverinfoservice:DriverinfoService) { }

  ngOnInit(): void {
    this.driverinfoservice.getallDriverinfo().subscribe(
      (data)=>this.driver=data
    )
  }

}
