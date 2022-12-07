import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-cabapproval',
  templateUrl: './cabapproval.component.html',
  styleUrls: ['./cabapproval.component.css']
})
export class CabapprovalComponent implements OnInit {

  public driverapp:any;
  constructor(private bookservice:BookingService) { }

  ngOnInit(): void {
    this.bookservice.getpending().subscribe(
      (data:any)=>{
        console.log(data);
        this.driverapp=data;
      },
      (Error:any)=>{
        alert(Error)
      }
    )
  }

  Reject(id:any){

    this.bookservice.rejectreq(id).subscribe(
      (data:any)=>{
        console.log("Approved");
        window.location.reload();
      },
      (Error:any)=>{
        console.log("Error in approval");
      }
    )
  }

  Approve(id:any){
    this.bookservice.approvereq(id).subscribe(
      (data:any)=>{
        console.log("Approved");
        window.location.reload();
      },
      (Error:any)=>{
        console.log("Error in approval");
      }
    )
  }

}
