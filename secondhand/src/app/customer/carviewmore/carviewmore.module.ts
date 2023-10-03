import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarviewmorePageRoutingModule } from './carviewmore-routing.module';

import { CarviewmorePage } from './carviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarviewmorePageRoutingModule
  ],
  declarations: [CarviewmorePage]
})
export class CarviewmorePageModule {}
