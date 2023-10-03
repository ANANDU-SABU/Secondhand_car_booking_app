import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FueltypeviewPage } from './fueltypeview.page';

const routes: Routes = [
  {
    path: '',
    component: FueltypeviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FueltypeviewPageRoutingModule {}
