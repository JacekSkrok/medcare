import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEntryPage } from './register-entry.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEntryPageRoutingModule {}
