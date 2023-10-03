import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrequestviewmorePage } from './myrequestviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: MyrequestviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrequestviewmorePageRoutingModule {}
