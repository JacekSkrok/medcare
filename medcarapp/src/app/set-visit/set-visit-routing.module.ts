import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetVisitPage } from './set-visit.page';

const routes: Routes = [
  {
    path: '',
    component: SetVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetVisitPageRoutingModule {}
