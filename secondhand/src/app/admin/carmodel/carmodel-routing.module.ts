import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarmodelPage } from './carmodel.page';

const routes: Routes = [
  {
    path: '',
    component: CarmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarmodelPageRoutingModule {}
