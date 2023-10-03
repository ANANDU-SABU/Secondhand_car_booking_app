import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarcompanyPageRoutingModule } from './carcompany-routing.module';

import { CarcompanyPage } from './carcompany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarcompanyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarcompanyPage]
})
export class CarcompanyPageModule {}
