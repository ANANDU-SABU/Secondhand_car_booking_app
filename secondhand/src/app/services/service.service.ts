import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  AddRequest(arg0: any) {
    throw new Error('Method not implemented.');
  }
  AddCategory: any;

  constructor(public afs:AngularFirestore) { }
  adminlogin(username: any, password: any)
   {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_adminlogin', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_adminloginId" });
  }
//fueltypereg
  AddCatagoery(CatagoeryData: any) {
    const CatagoeryDatas = JSON.parse(JSON.stringify(CatagoeryData));
    return this.afs.collection("collection_fueltype").add(CatagoeryDatas);
  }
  //carmodel
  Addmod(CatagoeryData: any) {
    const CatagoeryDatas = JSON.parse(JSON.stringify(CatagoeryData));
    return this.afs.collection("collection_carmodel").add(CatagoeryDatas);
  }
  //carregistration
  carregCatagoery(CatagoeryData: any) {
    const CatagoeryDatas = JSON.parse(JSON.stringify(CatagoeryData));
    return this.afs.collection("collection_car").add(CatagoeryDatas);
  }
  //customer signup
  customerreg(customerdata:any) {
    const customerdatas = JSON.parse(JSON.stringify(customerdata));
    return this.afs.collection("collection_customerreg").add(customerdatas);
  
    }
  // car company reg
  ccreg(customerdata:any) {
    const customerdatas = JSON.parse(JSON.stringify(customerdata));
    return this.afs.collection("collection_carcompany").add(customerdatas);
}
//customer sign in
customerlogin(username: any, password: any)
   {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_customerreg', (ref) => ref.where("username", "==", username).where("password", "==", password))
      .valueChanges({ idField: "collection_customerreg" });
  }
getfueltype()
  {
    const sizedata=this.afs.collection("collection_fueltype").valueChanges({idField:"collection_fueltypeId"});
    return sizedata;
  }


    //Size delete services 
    deletefueltype(Id:string){
      console.log(Id);
      return this.afs.doc<any>("collection_fueltype/"+Id).delete();
    }
    //carview
    getcar()
  {
    const sizedata=this.afs.collection("collection_car").valueChanges({idField:"collection_carId"});
    return sizedata;
  }


    //Size delete services 
    deletecar(carId:string){
      console.log(carId);
      return this.afs.doc<any>("collection_car/"+carId).delete();
    }
    //car model view
    getcarmodel()
  {
    const sizedata=this.afs.collection("collection_carmodel").valueChanges({idField:"collection_carmodelId"});
    return sizedata;
  }


    //Size delete services 
    deletecarmodel(carmodelId:string){
      console.log(carmodelId);
      return this.afs.doc("collection_carmodel/"+carmodelId).delete();
    }
    Addcar(ReqData:any){
      const ReqDatas=JSON.parse(JSON.stringify(ReqData));
      return this.afs.collection("collection_car").add(ReqDatas);
      }
    getcarId(requestid: any)
{
  const requestData = this.afs.doc<any>("collection_car/" + requestid).valueChanges();
  return requestData;
  }
//booking
myrequest(){
  const AllRequestDatas=this.afs.collection("collection_booking",(ref)=>ref.where("status","==","Pending")).valueChanges({idField:"collection_bookingId"});
  console.log(AllRequestDatas);
  return AllRequestDatas;
  }
 //profile
 getprofileId() {
  const profile = this.afs.doc<any>('collection_customerreg/' + localStorage.getItem("customerregId", ))
    .valueChanges({ idField: "collection_customerregId" });
  return profile;
  }
editprofile() {
  const profile = this.afs.doc<any>('collection_customerreg/' + localStorage.getItem("customerregId", ))
    .valueChanges({ idField: "collection_customerregId" });
  return profile;
  }
booking(ReqData:any){
  const ReqDatas=JSON.parse(JSON.stringify(ReqData));
  return this.afs.collection("collection_booking").add(ReqDatas);
  }
acceptrequest(requestId: any) {
  
  return this.afs.doc("collection_booking/" + requestId).update({status:"Request Accepted"});
  }
  rejectrequest(requestId: any) {
   
  return this.afs.doc("collection_booking/" + requestId).update({status:"Request Rejected"});
  }
  getservicereqbyid(requestid: any)
{
  console.log(requestid)
  const requestData = this.afs.doc<any>("collection_booking/" + requestid).valueChanges();
  return requestData;
  }
getmyacceptedrequest(){
  return this.afs.collection('collection_booking',(ref) => ref.where("status", "==", "Request Accepted")).valueChanges({idField:"collection_bookingId"});
  // console.log(categorydata);
}
//reject
getmyrejectedreq(){
  const stock = this.afs.collection('collection_booking',(ref) => ref.where("status", "==", "Request Rejected")).valueChanges({idField:"collection_bookingId"});
  console.log(stock);
   return stock;
}
getprofilebyId(requestid: any) {
  const requestData = this.afs.doc<any>("collection_customerreg/" + requestid).valueChanges();
  return requestData;
}
getpowertoolbyname(carmodelname:any){
  const AllRequestDatas=this.afs.collection("collection_car",(ref)=>ref.where("carmodelname","==",carmodelname)).valueChanges({idField:"collection_carId"});
  console.log(AllRequestDatas);
  return AllRequestDatas;
  }

getcust()
{
  const sizedata=this.afs.collection("collection_customerreg").valueChanges({idField:"collection_customerregId"});
  return sizedata;
}

}