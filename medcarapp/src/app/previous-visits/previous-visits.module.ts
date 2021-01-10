import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousVisitsPageRoutingModule } from './previous-visits-routing.module';

import { PreviousVisitsPage } from './previous-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousVisitsPageRoutingModule
  ],
  declarations: [PreviousVisitsPage]
})
export class PreviousVisitsPageModule {}
