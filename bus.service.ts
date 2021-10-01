import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  baseURL:string="http://localhost:8088/api/rest";
  constructor(private http:HttpClient) { }
 ScheduleID:any;
 Seats:any;
 costOfBooking:any;
 bus_id:any;
  getData()
  {
  
  return this.http.get(this.baseURL+"/Schedule");
  //  return this.vehicleArray;
  }
  getSelectedSeat(data:any)
  {
    return this.http.get(this.baseURL+"/seatbySch/"+data);
  }
  addSeat(data:any)
  {
    return this.http.post(this.baseURL+"/seats",data);
  }
  setScheduleIdAndSeatsAndCostAndBusId(data1:any,data2:any,data3:any,data4:any)
  {
 this.ScheduleID=data1;
 this.Seats=data2;
 this.costOfBooking=data3;
 this.bus_id=data4;
  }
  getScheduleId()
  {
    return this.ScheduleID;
  }
  getSeats()
  {
    return this.Seats;
  }
  getTotalCost()
  {
    return this.costOfBooking;
  }
  getBusId()
  {
    return this.bus_id;
  }
  getCostBybusId(data:any)
  {
    return this.http.get(this.baseURL+"/CostByBusId/"+data);
  }
  getBusData()
  {
    return this.http.get(this.baseURL+"/buses");
  }
  addTransaction(data:any)
  {
    return this.http.post(this.baseURL+"/Transaction",data);
  }
  addBooking(data:any)
  {
    return this.http.post(this.baseURL+"/Booking",data); 
  }
  getTransaction()
  {
    return this.http.get(this.baseURL+"/Transaction");
  }
}
