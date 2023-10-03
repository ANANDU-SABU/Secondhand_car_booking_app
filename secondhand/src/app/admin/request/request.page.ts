import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  request:any[]=[];

  constructor(private ss:ServiceService) { }

  ngOnInit() {
    this.ss.myrequest().subscribe(res=>{console.log(res);
      this.request=res; 
    })
  }
//     submit()
//     {
//       const requestform={
//         buyerid:localStorage.getItem("")
//         requestdate:
//         requeststatus:
//         description:
//       }
//       console.log(this.carform.value);
//       this.rs.carregCatagoery(this.carform.value).then(() => { alert("Registration Completed");
//         //  this.router.navigate(['/Admin/catagoeryview']);
//     });
//   }
}