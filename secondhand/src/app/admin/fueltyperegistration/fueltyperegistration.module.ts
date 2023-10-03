import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FueltyperegistrationPageRoutingModule } from './fueltyperegistration-routing.module';

import { FueltyperegistrationPage } from './fueltyperegistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FueltyperegistrationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FueltyperegistrationPage]
})
export class FueltyperegistrationPageModule {}
