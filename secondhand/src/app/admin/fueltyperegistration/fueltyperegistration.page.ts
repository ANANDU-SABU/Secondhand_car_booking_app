import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-fueltyperegistration',
  templateUrl: './fueltyperegistration.page.html',
  styleUrls: ['./fueltyperegistration.page.scss'],
})
export class FueltyperegistrationPage implements OnInit {

  constructor(private fb:FormBuilder,
    private rs:ServiceService,private router:Router
    ) { }
  public catform=this.fb.group({fuelname:['']})

  ngOnInit() {
  }
submit()
{
  console.log(this.catform.value);
  this.rs.AddCatagoery(this.catform.value).then(() => { alert("Registration Completed");
     this.router.navigate(['/admin/fueltypeview']);
});


}
}
