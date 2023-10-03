import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarregviewPageRoutingModule } from './carregview-routing.module';

import { CarregviewPage } from './carregview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarregviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarregviewPage]
})
export class CarregviewPageModule {}
