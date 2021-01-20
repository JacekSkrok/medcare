import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../model/Visit';

import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private visits: Observable<Visit[]>;
  private visitCollection: AngularFirestoreCollection<Visit>;
  
  constructor(private afs: AngularFirestore) {
    this.visitCollection = this.afs.collection<Visit>('visits');
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

  getVisit() {
    
  }

  addVisit(visit: Visit): Promise<DocumentReference> {
    return this.visitCollection.add(visit);
  }
}
