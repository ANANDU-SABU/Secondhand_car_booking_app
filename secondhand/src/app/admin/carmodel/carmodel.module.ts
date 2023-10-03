import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarmodelPageRoutingModule } from './carmodel-routing.module';

import { CarmodelPage } from './carmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarmodelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarmodelPage]
})
export class CarmodelPageModule {}
