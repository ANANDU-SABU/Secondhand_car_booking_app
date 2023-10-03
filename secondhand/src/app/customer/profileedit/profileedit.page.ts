import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.page.html',
  styleUrls: ['./profileedit.page.scss'],
})
export class ProfileeditPage implements OnInit {

  profileid: any;

  
  constructor(private ss: ServiceService, private fb: FormBuilder, private route: ActivatedRoute,private router:Router,private storage:AngularFireStorage) {
    
  }
  public profile = this.fb.group(
    {
      name: [''],
      phonenumber: [''],
      place: [''],
      aadhar: [''],
      username: [''],
      password:[''],
    });

  ngOnInit() {
    console.log(this.profileid);
    this.ss.getprofileId().subscribe(res => {
      console.log(res);
      if (res) {
        this.profile.patchValue(res);
        
      }
    }); 
  }
  // upload(file : any) {
  //   const path = `pow/${Date.now()}_${file.name}`;
  //   // Reference to storage bucket
  //   const ref = this.storage.ref(path);
  //   // The main task
  //   const task = this.storage.upload(path, file);
  //   // Progress monitoring
  //   return new Promise((resolve, reject) => {
  //     task.then(async (res) => {
  //       const url = await res.ref.getDownloadURL();
  //       resolve(url);
  //     })
  //       .catch((err) => {
  //         console.log(err.message_);
  //         reject(err.code_);
  //       });
  //   });
  

  update() {
    console.log(this.profile.value);
    this.ss.editprofile().subscribe(() => 
    {
      alert("Updated Successfull");
      this.router.navigate(['/Guest/signup']);
    });
  }





}