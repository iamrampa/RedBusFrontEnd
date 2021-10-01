import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BusService } from '../bus.service';
import { Seat } from '../seat';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  seatClass:Seat;
  trans:Transaction;
  trans1:any;
  book:Booking;
 
  constructor(private bser:BusService,private router:Router) {
    this.seatClass=new Seat();
    this.trans=new Transaction();
    this.book=new Booking();
 
   
   }
 scheduleId:any;
 seats:any;
  ngOnInit(): void {
  }
  saveData(data:any)
  {
 this.scheduleId=this.bser.getScheduleId();
 console.log(this.scheduleId)
 this.seats=this.bser.getSeats();
 console.log(this.seats)
 this.seatClass.sch_id=this.scheduleId;
 this.seatClass.available="yes";
 for(let i=0;i<this.seats.length;i++)
      {
       this.seatClass.seatNo=this.seats[i];
       this.bser.addSeat(this.seatClass).subscribe(
        (data)=>{
          console.log(data);
        if(data)
        alert("Seat Added");
      },
      (error)=>{
        console.log(error);
      }
       )
      }
      this.trans.total_cost=this.bser.getTotalCost();
      console.log(this.trans.total_cost);
      this.trans.cancelled_status="no";
      this.trans.reg_id=null;
      this.trans.unreg_id=null;
      this.trans.bus_id=this.bser.getBusId();
      this.bser.addTransaction(this.trans).subscribe(
        data=>{
          console.log(data);
          this.trans1=data as Transaction;
          console.log(this.trans1);
          console.log(this.trans1.trans_id);
          this.book.trans_id=this.trans1.trans_id;
          this.book.no_of_seats=this.seats.length;
          for(let i=0;i<this.seats.length;i++)
          {
           this.book.seatNo=this.seats[i];
           this.bser.addBooking(this.book).subscribe(
             data=>{
               console.log(data);
               
             },
             error=>{
               console.log(error);
             }
            
           );
          }
        },
        error=>{
          console.log(error);
        }

      );
     
     this.router.navigate(['task1']);
  }


}
