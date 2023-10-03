import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb:FormBuilder,private regservice:ServiceService,private router:Router,private datepipe:DatePipe) { }

  currentdate:any;
  customerregister!:FormGroup;
  dateformat:any;
 
  ngOnInit() 
  {

  this.currentdate=new Date();
  this.dateformat=this.datepipe.transform(this.currentdate,'dd-MM-yyyy');
this.customerregister=this.fb.group({ name: [''], phonenumber: [''], place: [''], aadhar: [''],username: [''], password: [''] , regdate:this.dateformat})
  }
  submit() {
    console.log(this.customerregister.value);
    this.regservice.customerreg(this.customerregister.value).then(() => {
      alert("sucessfully Registered");
      this.router.navigate(['/Guest/signin']);
});

  }
}