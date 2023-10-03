import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FueltypeviewPageRoutingModule } from './fueltypeview-routing.module';

import { FueltypeviewPage } from './fueltypeview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FueltypeviewPageRoutingModule
  ],
  declarations: [FueltypeviewPage]
})
export class FueltypeviewPageModule {}
