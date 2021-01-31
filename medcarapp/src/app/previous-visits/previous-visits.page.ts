import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../model/Visit';
import { PreviousVisitsService } from '../services/previous-visits.service';

@Component({
  selector: 'app-previous-visits',
  templateUrl: './previous-visits.page.html',
  styleUrls: ['./previous-visits.page.scss'],
})
export class PreviousVisitsPage implements OnInit {
  previousVisits: Observable<Visit[]>;

  constructor( private pvService: PreviousVisitsService ) { }

  ngOnInit(): void {
    this.previousVisits = this.pvService.getVisits();
  }

  addEvent() {
    let start = new Date();
    let end = new Date();
  
    end.setMinutes(start.getMinutes() + 60);
    let event = {
      doctorName: 'Lek. med. Zbigniew Maj',
      startTime: start,
      endTime: end,
      createdAt: new Date().getTime(),
      specialisation: "Pediatra",
      visitType: "Rozmowa telefoniczna"
    }
    this.pvService.addVisit(event);
  }

}
