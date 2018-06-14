import { SuperHero } from './../models/superhero';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getHeroes(): Observable<any[]> {
    // return this.db.list('/Superheroes').valueChanges();
    return this.db.collection<any[]>('Superheroes').valueChanges();
  }
}
