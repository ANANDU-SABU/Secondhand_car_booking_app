import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.page.html',
  styleUrls: ['./carmodel.page.scss'],
})
export class CarmodelPage implements OnInit {
 image:any 

  constructor(private fb: FormBuilder, private service: ServiceService,private router:Router,private storage: AngularFireStorage) { }
  public modform = this.fb.group({ carmodelname: [''], fuelname: [''],companyname: [''],image:[] })


  ngOnInit() {
  }
  submit() {
    console.log(this.modform.value);
    this.service.Addmod(this.modform.value).then(() => {
      alert("Registration Completed");
      // this.router.navigate(['/Admin/categoryview']);
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
    this.modform.controls.image.setValue(this.image);
    alert("File Uploaded");

  }
}
}
