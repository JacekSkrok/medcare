import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEntryPageRoutingModule } from './register-entry-routing.module';

import { RegisterEntryPage } from './register-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEntryPageRoutingModule
  ],
  declarations: [RegisterEntryPage]
})
export class RegisterEntryPageModule {}
