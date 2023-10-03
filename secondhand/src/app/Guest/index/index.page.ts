import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {
  public sizedata: any[] = [];

  constructor(private alertController: AlertController,private ss:ServiceService,private fb:FormBuilder) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'dont have an account',
      message: 'please fill the  fields',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ionViewDidEnter()
   {

    this.ss.getcar().subscribe(res => {
      console.log(res);
      this.sizedata = res;
    });
  }
}
