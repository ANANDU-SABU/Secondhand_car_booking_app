import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarregviewPage } from './carregview.page';

const routes: Routes = [
  {
    path: '',
    component: CarregviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarregviewPageRoutingModule {}
