import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.page.html',
  styleUrls: ['./customerview.page.scss'],
})
export class CustomerviewPage {

  bm: any;
  public customer: any[]=[];
  constructor(private route: ActivatedRoute,private ss:ServiceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bm = params.get('id');
      console.log(this.bm);
    });
  }

  ionViewDidEnter() {
    this.ss.getprofilebyId(this.bm).subscribe(res => {
      console.log(res);
      this.customer['0'] = res;
    });
  }
}