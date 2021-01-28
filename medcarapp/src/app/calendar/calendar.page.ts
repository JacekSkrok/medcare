import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { CalendarComponent } from 'ionic2-calendar';
import { Observable } from 'rxjs';

import { Visit } from '../model/Visit';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage{
  visits: Observable<Visit[]>;

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('visits').snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach( snap => {
        const event: any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.endTime = event.endTime.toDate();
        event.startTime = event.startTime.toDate();
        this.eventSource.push(event);
      });
    });
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


    //this.fbService.addVisit(event);
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
