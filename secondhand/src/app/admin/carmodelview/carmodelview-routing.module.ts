import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarmodelviewPage } from './carmodelview.page';

const routes: Routes = [
  {
    path: '',
    component: CarmodelviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarmodelviewPageRoutingModule {}
