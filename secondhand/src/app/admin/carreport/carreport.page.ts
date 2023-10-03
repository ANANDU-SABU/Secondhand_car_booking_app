import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carreport',
  templateUrl: './carreport.page.html',
  styleUrls: ['./carreport.page.scss'],
})
export class CarreportPage {

  public carmodelname: any[] = [];

  constructor(private ss:ServiceService) { }


   ionViewDidEnter() {

    this.ss.getcarmodel().subscribe(res => {
      console.log(res);
      this.carmodelname = res;
    });
  }
}
