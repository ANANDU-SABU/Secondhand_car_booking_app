import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public valid = false;
  constructor(private fb:FormBuilder, private router:Router, private ss:ServiceService, private route: ActivatedRoute) { }
  data: any[] = [];
  public customerloginform=this.fb.group({
    username:[''],
  password:['']
})
  ngOnInit() {
  }
  submit() {
    if(this.customerloginform.value.username ==""||
    this.customerloginform.value.password ==""||"")
    {
      alert("Please Fill all the fields")
  }
    console.log(this.customerloginform.value);
    this.ss.customerlogin(this.customerloginform.value.username, this.customerloginform.value.password)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.data = res;
        if (this.data.length > 0) {
          alert("login successfully");
          localStorage.setItem('name',this.data[0].name);

          localStorage.setItem('customerregId',res[0].collection_customerreg);
          this.router.navigate(['/customer/profile']);
        }
        else {
          alert("login failed");
          this.router.navigate(['Guest/signin']);
        }
  
      });
  }
}

