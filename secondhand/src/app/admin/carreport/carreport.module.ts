import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarreportPageRoutingModule } from './carreport-routing.module';

import { CarreportPage } from './carreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarreportPageRoutingModule
  ],
  declarations: [CarreportPage]
})
export class CarreportPageModule {}
