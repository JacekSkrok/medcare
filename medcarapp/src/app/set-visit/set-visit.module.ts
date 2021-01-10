import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetVisitPageRoutingModule } from './set-visit-routing.module';

import { SetVisitPage } from './set-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetVisitPageRoutingModule
  ],
  declarations: [SetVisitPage]
})
export class SetVisitPageModule {}
