import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousVisitsPage } from './previous-visits.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousVisitsPageRoutingModule {}
