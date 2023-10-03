import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarshowPage } from './carshow.page';

const routes: Routes = [
  {
    path: '',
    component: CarshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarshowPageRoutingModule {}
