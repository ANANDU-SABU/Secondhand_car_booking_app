import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreportPage } from './carreport.page';

const routes: Routes = [
  {
    path: '',
    component: CarreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreportPageRoutingModule {}
