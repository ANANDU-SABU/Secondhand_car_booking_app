import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carviewmore',
  templateUrl: './carviewmore.page.html',
  styleUrls: ['./carviewmore.page.scss'],
})
export class CarviewmorePage implements OnInit {

  public carname: any[] = [];
  carid:any;
  currentdate:any;
  formatdate:any;
public carform:any[] = [];
  constructor(private ss:ServiceService,private router:Router,private route:ActivatedRoute,private DatePipe:DatePipe) { 
    this.route.paramMap.subscribe((params:ParamMap)=>{this.carid=params.get('id')})}

  
  ngOnInit() {
    this.currentdate=new Date();
    this.formatdate=this.DatePipe.transform(this.currentdate,'yyyy-MM-dd');
    console.log(this.carid);
      this.ss.getcarId(this.carid).subscribe(res=>
      {
        if(res){
         this.carname[0]=res
        }
      })
  }
  book(){
    
    this.carform[0]={
      
      carname:this.carname[0].carname, 
      rate:this.carname[0].rate, 
      carimage1:this.carname[0].carimage1, 
      requestdate:this.formatdate,
      
      status:"Pending",

      
      name:localStorage.getItem('name'),
      customerid:localStorage.getItem('customerregId')
    }

    console.log(this.carform[0]);
    this.ss.booking(this.carform[0]).then(()=>{
      alert("Request send");
      this.router.navigate(['/customer/index'])
      }
  )} 
}


   
      

 