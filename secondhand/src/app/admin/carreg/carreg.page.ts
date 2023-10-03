import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carreg',
  templateUrl: './carreg.page.html',
  styleUrls: ['./carreg.page.scss'],
})
export class CarregPage implements OnInit {
  image: any;
  fuel:any;
  model:any;
  constructor(private fb:FormBuilder,
    private rs:ServiceService,private storage: AngularFireStorage
    ) { }
  public carform=this.fb.group({carname:[''], fuelname:[''], carmodelname:[''], customername:[''], 
  companyname:[''],regno:[''], currentkm:[''], postdate:[''], rate:[''], description:[''], ownership:[''],carimage1:[''],carimage2:[''],carimage3:[''],})


  ngOnInit() {
    this.rs.getfueltype().subscribe((data: any) => {
    this.fuel=data;
    console.log(data);
  });

  this.rs.getcarmodel().subscribe((data: any) => {
    this.model=data;
    console.log(data);
  });
  
  }
submit()
{
  console.log(this.carform.value);
  this.rs.carregCatagoery(this.carform.value).then(() => { alert("Registration Completed");
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
    this.carform.controls.carimage1.setValue(this.image);
    alert("File Uploaded");

  }
}

async handlefile1(event: any) {
  const files = event?.target?.files;
  if (files?.length) {
    this.image = await this.upload(files[0]);
    console.log(this.image);
    this.carform.controls.carimage2.setValue(this.image);
    alert("File Uploaded");

  }
}
async handlefile2(event: any) {
  const files = event?.target?.files;
  if (files?.length) {
    this.image = await this.upload(files[0]);
    console.log(this.image);
    this.carform.controls.carimage3.setValue(this.image);
    alert("File Uploaded");

  }
}
}