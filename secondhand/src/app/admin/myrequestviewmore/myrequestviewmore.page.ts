import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-myrequestviewmore',
  templateUrl: './myrequestviewmore.page.html',
  styleUrls: ['./myrequestviewmore.page.scss'],
})
export class MyrequestviewmorePage  {
 // public mechanics: any[]=[];

 public request: any[]=[];
 public requestviewmore: any[]=[];
 acceptid:any;
 constructor(private ss:ServiceService  ,private route:ActivatedRoute,private router:Router) {
   this.route.paramMap
   .subscribe((params:ParamMap)=>
   {
     this.acceptid=params.get('id');
   });
  }

 //  public mechanicform = this.fb.group({
 //   mechanicname: [''] 
 // })

 ionViewDidEnter() {
   this.ss.getservicereqbyid(this.acceptid).subscribe(res=>
     {
       console.log(res);
       this.requestviewmore[0]=res;
     }
     );

     // this.ss.getmechanic().subscribe(res=>
     //   {
     //     console.log(res);
     //       this.mechanics=res;
     //     }
     //     );
    
       }
       accept(acceptid: String)
       {
         if(confirm("you want to accept?")){
           this.ss.acceptrequest(this.acceptid).then((error:any)=>
           
           console.error(error));
           this.router.navigate(['/admin/request']);
 
         }
       }
       reject(acceptid: String)
       {
         if(confirm("you want to reject?")){
           this.ss.rejectrequest(this.acceptid).then((error:any)=>
           console.error(error));
           this.router.navigate(['/admin/request']);
 
         }
       }
 
 
   }