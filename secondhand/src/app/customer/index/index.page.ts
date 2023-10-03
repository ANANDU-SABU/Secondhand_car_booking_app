import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  public sizedata: any[] = [];

  constructor(private ss:ServiceService,private fb:FormBuilder) { }

  public searchform=this.fb.group({
    carmodelname: ['']
  })

   ionViewDidEnter() {

    this.ss.getcar().subscribe(res => {
      console.log(res);
      this.sizedata = res;
    });
  }
  submit1() {
    console.log(this.searchform.value);
    this.ss.getpowertoolbyname(this.searchform.value.carmodelname).subscribe(res => {
      console.log(res);
      this.sizedata = res;
    });

}
submit2() {
  console.log(this.searchform.value);
  this.ss.getpowertoolbyname(this.searchform.value.carmodelname).subscribe(res => {
    console.log(res);
    this.sizedata = res;
  });

}

}

