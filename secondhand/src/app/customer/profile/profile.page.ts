import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  public profile: any[] = [];

  constructor(private ss:ServiceService) { }
  ionViewDidEnter() {
    this.ss.getprofileId().subscribe(res => {
      console.log(res);
      this.profile [0]= res;
    });
  }
}
