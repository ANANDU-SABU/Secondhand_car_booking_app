import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarviewmorePage } from './carviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: CarviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarviewmorePageRoutingModule {}
