import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carcompany',
  templateUrl: './carcompany.page.html',
  styleUrls: ['./carcompany.page.scss'],
})
export class CarcompanyPage implements OnInit {
  image: any;
  constructor(private fb:FormBuilder,
    private rs:ServiceService,private storage: AngularFireStorage
    ) { }
  public ccform=this.fb.group({companyname:[''], carimage1:[''], openingdate:[''], location:[''], })


  ngOnInit() {
    
  }
submit()
{
  console.log(this.ccform.value);
  this.rs.ccreg(this.ccform.value).then(() => { alert("Registration Completed");
    //  this.router.navigate(['/Admin/catagoeryview']);
});



}
upload(file:any) {
  const path = `car/${Date.now()}_${file.name}`;
  // Reference to storage bucket
  const ref = this.storage.ref(path);
  // The main task
  const task = this.storage.upload(path, file);
  // Progress monitoring
  return new Promise((resolve, reject) => {
    task.then(async (res) => {
      const url = await res.ref.getDownloadURL();
      resolve(url);
    })
      .catch((err) => {
        console.log(err.message_);
        reject(err.code_);
      });
  });
}
async handlefile(event: any) {
  const files = event?.target?.files;
  if (files?.length) {
    this.image = await this.upload(files[0]);
    console.log(this.image);
    this.ccform.controls.carimage1.setValue(this.image);
    alert("File Uploaded");

  }
}



}
 
