import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
registerLocaleData(localePL);
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule,
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL'}
  ]
})
export class CalendarPageModule {}
