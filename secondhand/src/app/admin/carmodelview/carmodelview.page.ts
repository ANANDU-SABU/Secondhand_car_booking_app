import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carmodelview',
  templateUrl: './carmodelview.page.html',
  styleUrls: ['./carmodelview.page.scss'],
})
export class CarmodelviewPage  {
  public carmodelname: any[] = [];

  constructor(private ss:ServiceService) { }


   ionViewDidEnter() {

    this.ss.getcarmodel().subscribe(res => {
      console.log(res);
      this.carmodelname = res;
    });
  }
    delete(carmodelId:string)
    {
      if(confirm("Do you want to delete")){
        this.ss.deletecarmodel(carmodelId).then(
          (error: any) =>console.error(error)
        );
      }
      }

}
