import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  public addBooking(reg:any,id:any,regid:any)
  {
    
    return this.http.post(`http://localhost:9091/booking/addBooking/${id}/${regid}`,reg);
  }
  public getAllBooking()
  {
    return this.http.get('http://localhost:9091/booking/getAllBooking'); 
  }

  public getBookingByuserId(id:any)
  {
    
    return this.http.get(`http://localhost:9091/booking/getBookingByUserId/${id}`); 
  }
  
  public getpending()
  {
    return this.http.get(`http://localhost:9091/booking/getPendingRequest`); 
  }

  public approvereq(id:any)
  {
    
    return this.http.get(`http://localhost:9091/booking/approvereq/${id}`); 
  }

  public rejectreq(id:any)
  {
    
    return this.http.get(`http://localhost:9091/booking/rejectreq/${id}`); 
  }
}
