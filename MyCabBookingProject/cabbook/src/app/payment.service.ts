import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
public addPayment(reg:any)
{
  return this.http.post('http://localhost:9091/payment/addPayment',reg);
}
public getAllPayment()
{
  return this.http.get('http://localhost:9091/payment/getAllPayment');
}


}
