import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  request:any;
  myrequest:any;

  constructor(private ss:ServiceService) { }

  ngOnInit() {
    this.ss.myrequest().subscribe(res=>{console.log(res);
      this.request=res;
    })
  
  }

}