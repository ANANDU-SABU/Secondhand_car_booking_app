import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrequestviewmorePageRoutingModule } from './myrequestviewmore-routing.module';

import { MyrequestviewmorePage } from './myrequestviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrequestviewmorePageRoutingModule
  ],
  declarations: [MyrequestviewmorePage]
})
export class MyrequestviewmorePageModule {}
