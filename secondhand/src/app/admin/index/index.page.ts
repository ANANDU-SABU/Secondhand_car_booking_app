import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  
  len: any
  sessionlength: any;
  constructor(private ss: ServiceService) { }

  ngOnInit() {
    this.ss.myrequest().subscribe(res => {
      console.log(res);
      this.len = res.length;
      this.sessionlength = localStorage.getItem("sessionlength");
      if (this.len > this.sessionlength) {
        this.PlaySound();
      }
      else {
        localStorage.setItem('requestlenght', this.len);
      }
      console.log(localStorage.getItem("requestlenght"));
    });
  }
  PlaySound() {
    let audio = new Audio;
    audio.src = "../../../assets/notification.wav";
    audio.load();
    audio.play();
    alert("New request added");
    localStorage.setItem('sessionlength', this.len)
  }

}