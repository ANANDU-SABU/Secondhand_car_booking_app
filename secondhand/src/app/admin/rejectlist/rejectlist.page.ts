import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-rejectlist',
  templateUrl: './rejectlist.page.html',
  styleUrls: ['./rejectlist.page.scss'],
})
export class RejectlistPage {
  public request1: any[]=[];
  constructor(private ss:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ionViewDidEnter() {
    this.ss.getmyrejectedreq().subscribe(res=>
      {
        console.log(res);
        this.request1=res;

      }
    );

}
}
