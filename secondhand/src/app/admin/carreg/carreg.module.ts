import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarregPageRoutingModule } from './carreg-routing.module';

import { CarregPage } from './carreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarregPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarregPage]
})
export class CarregPageModule {}
