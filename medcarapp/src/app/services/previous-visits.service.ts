import { Injectable } from '@angular/core';
import { Visit } from '../model/Visit';
import { Observable } from 'rxjs';

import { map, take } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PreviousVisitsService {
  private visits: Observable<Visit[]>;
  private visitCollection: AngularFirestoreCollection<Visit>;

  constructor(private afs: AngularFirestore) {
    this.visitCollection = this.afs.collection<Visit>('users_visits');
    this.visits = this.visitCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getVisits(): Observable<Visit[]> {
    return this.visits;
  }

  getPort(id: string): Observable<Visit> {
    return this.visitCollection.doc<Visit>(id).valueChanges().pipe(
        take(1),
        map(port => {
          port.id = id;
          return port;
        })
    );
  }

  addVisit(visit: Visit): Promise<DocumentReference> {
    return this.visitCollection.add(visit);
  }

}
