import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarshowPageRoutingModule } from './carshow-routing.module';

import { CarshowPage } from './carshow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarshowPageRoutingModule
  ],
  declarations: [CarshowPage]
})
export class CarshowPageModule {}
