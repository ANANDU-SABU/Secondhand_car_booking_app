import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectlistPageRoutingModule } from './rejectlist-routing.module';

import { RejectlistPage } from './rejectlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectlistPageRoutingModule
  ],
  declarations: [RejectlistPage]
})
export class RejectlistPageModule {}
