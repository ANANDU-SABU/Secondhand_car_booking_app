import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FueltyperegistrationPage } from './fueltyperegistration.page';

const routes: Routes = [
  {
    path: '',
    component: FueltyperegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FueltyperegistrationPageRoutingModule {}
