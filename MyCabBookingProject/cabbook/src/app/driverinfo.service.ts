import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverinfoService {

  constructor(private http:HttpClient) { }

  public getallDriverinfo():Observable<any>{
    return this.http.get(`http://localhost:9091/driver/getAllDriverInfo`);
  }

  public addinfo(regdata:any){
    return this.http.post(`http://localhost:9091/driver/addDriverInfo`,regdata);
  }

  public deletedriverinfo(id:any){

    return this.http.delete(`http://localhost:9091/driver/deleteDriverInfoById/${id}`);
  }

  public editdriverinfo(reg:any){

    return this.http.put(`http://localhost:9091/driver/addDriverInfo`,reg);
  }

 public getdriverbyid(id:any){
  return this.http.get(`http://localhost:9091/driver/findDriverInfoById/${id}`);
  }

}
