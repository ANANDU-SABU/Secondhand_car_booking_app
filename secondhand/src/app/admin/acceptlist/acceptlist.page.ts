import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-acceptlist',
  templateUrl: './acceptlist.page.html',
  styleUrls: ['./acceptlist.page.scss'],
})
export class AcceptlistPage  {

  public request: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ionViewDidEnter() {
    this.view.getmyacceptedrequest().subscribe(res=>
      {
        console.log(res);
        this.request=res;

      }
      );
// this.view.getmyrejectedreq().subscribe(res=>
//   {
//     console.log(res);
//     this.request=res;

//   }
//       );
  }
}
