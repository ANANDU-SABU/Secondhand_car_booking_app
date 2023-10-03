import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarmodelviewPageRoutingModule } from './carmodelview-routing.module';

import { CarmodelviewPage } from './carmodelview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarmodelviewPageRoutingModule
  
  ],
  declarations: [CarmodelviewPage]
})
export class CarmodelviewPageModule {}
