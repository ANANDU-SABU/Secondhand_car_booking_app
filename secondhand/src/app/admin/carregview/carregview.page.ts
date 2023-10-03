import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carregview',
  templateUrl: './carregview.page.html',
  styleUrls: ['./carregview.page.scss'],
})
export class CarregviewPage implements OnInit {

  public carname: any[] = [];

  constructor(private ss:ServiceService) { }
  ngOnInit() {
   
  }


   ionViewDidEnter() {

    this.ss.getcar().subscribe(res => {
      console.log(res);
      this.carname = res;
    });
  }
    delete(carnameidId:any)
    {
      if(confirm("Do you want to delete")){
        this.ss.deletecar(carnameidId).then(
          (error: any) =>console.error(error)
        );
      }
      }

}
