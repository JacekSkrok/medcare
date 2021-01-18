import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore,
    private ngFireAuth: AngularFireAuth) {
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }));
  }


  getUsers(): Observable<User[]> {
    return this.users;
  }
  
  getUser() :Observable<User>{
     return this.ngFireAuth.user.pipe(map(a=>{
      console.log(a.uid);
      return this.usersCollection.doc<User>(a.uid).valueChanges().pipe(
        map(usr => {
          usr.id = a.uid;
          usr.email = a.email;
          return usr;
        }))
      })).pipe(mergeAll())
      };

  createUser(id: string,
    firstname: string,
    lastname: string,
    birthdate: Date,
    country: string,
    city: string,
    phoneNumer: string,
    street: string,
    propertyNumer: string): Promise<void>{
    return this.afs.doc('users/'+ id).set({
      firstname,
      lastname,
      birthdate,
      country,
      city,
      phoneNumer,
      street,
      propertyNumer
    });
  }
}
