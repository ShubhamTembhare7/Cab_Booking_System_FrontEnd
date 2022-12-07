import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DriverinfoService } from '../driverinfo.service';

@Component({
  selector: 'app-alldriver',
  templateUrl: './alldriver.component.html',
  styleUrls: ['./alldriver.component.css']
})
export class AlldriverComponent implements OnInit {


  public driver:any={
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    vehicleName:'',
    modelName:'',
    driverVehicleNo:''
  }

  constructor(private driverinfoservice:DriverinfoService,private route:Router) { }

  ngOnInit(): void {
    this.driverinfoservice.getallDriverinfo().subscribe(
      (data)=>this.driver=data
  //console.log(this.driver);

    )
  }

  Edit(id:any){
    this.route.navigate(['/adminpage/driverform/'+id]);
    
  }

  Delete(id:any){
    this.driverinfoservice.deletedriverinfo(id).subscribe(
      (data:any)=>{
        window.location.reload();
      },
      (Error:any)=>{
  
      }
    )
    }

}
