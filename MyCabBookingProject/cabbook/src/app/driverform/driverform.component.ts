import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';
@Component({
  selector: 'app-driverform',
  templateUrl: './driverform.component.html',
  styleUrls: ['./driverform.component.css']
})
export class DriverformComponent implements OnInit {

  public isexist=false;
  public temp=[1000,2000,15000,2000,40000];
  public driverinfo:any=
  {
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    driverVehicleNo:'',
    vehicleName:'',
    modelName:'',
    price:''
  }

  constructor(private driverinfoservice:DriverinfoService,private ar:ActivatedRoute) { }

  ngOnInit(): void {

    //this.driverinfo=this.driverinfoservice.getallDriverinfo();
    this.driverinfo=this.driverinfoservice.getdriverbyid(this.ar.snapshot.params['id']).subscribe(
      (data:any)=>{
        this.isexist=true;
        console.log(data)
        this.driverinfo=data;
      },
      // (error:any)=>{
      //   alert(error);
      // }
    )
  }

  savedata(){
    console.log(this.driverinfo);
    this.driverinfoservice.addinfo(this.driverinfo).subscribe(
      
      (data:any)=>{
        alert("Data Added Successfully!");
      },
      (Error:any)=>{
        console.log(Error);
        alert("Error while inserting");
      }
    )
    
  }
}
