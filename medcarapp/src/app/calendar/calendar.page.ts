import { Component, OnInit, ViewChild } from '@angular/core';

import { CalendarComponent } from 'ionic2-calendar';
import { Observable } from 'rxjs';

import { Visit } from '../model/Visit';

import { FirebaseService } from '../services/firebase.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  visits: Observable<Visit[]>;

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(  private fbService: FirebaseService,
                private userService: UserService ) { }

 
  ngOnInit(): void {
    this.visits = this.fbService.getVisits();
    this.createVisitsFromFirebase;

  }

  addEvent() {
    let start = new Date();
    let end = new Date();
    

    end.setMinutes(start.getMinutes() + 60);
    let event = {
      doctorName: 'Lek. med. Janusz Wójciak',
      startTime: start,
      endTime: end,
      createdAt: new Date().getTime()
    }


    this.fbService.addVisit(event);
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  createVisitsFromFirebase() {
    var events = []

    for(let i in this.visits) {
      events[i] = this.visits[i]
      console.log(events)
      events.push
    }
 
    this.eventSource = events

  }
}
