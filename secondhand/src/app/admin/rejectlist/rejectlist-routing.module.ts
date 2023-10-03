import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectlistPage } from './rejectlist.page';

const routes: Routes = [
  {
    path: '',
    component: RejectlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectlistPageRoutingModule {}
