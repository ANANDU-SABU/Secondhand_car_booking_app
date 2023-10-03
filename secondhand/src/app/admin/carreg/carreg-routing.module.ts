import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarregPage } from './carreg.page';

const routes: Routes = [
  {
    path: '',
    component: CarregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarregPageRoutingModule {}
