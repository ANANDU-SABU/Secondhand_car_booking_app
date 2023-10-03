import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-fueltypeview',
  templateUrl: './fueltypeview.page.html',
  styleUrls: ['./fueltypeview.page.scss'],
})
export class FueltypeviewPage  {
  public fueltype: any[] = [];

  constructor(private ss:ServiceService) { }


   ionViewDidEnter() {

    this.ss.getfueltype().subscribe(res => {
      console.log(res);
      this.fueltype = res;
    });
  }
    delete(fueltypeidId:any)
    {
      if(confirm("Do you want to delete")){
        this.ss.deletefueltype(fueltypeidId).then(
          (error: any) =>console.error(error)
        );
      }
      }

}