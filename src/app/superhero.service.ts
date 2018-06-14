import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { SuperHero } from '../models/superhero';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  heroSubject = new Subject();
  herosChanged = new Subject();

  selectedHero: SuperHero;

  Heroes: SuperHero[] = [];

  constructor(private firebaseService: FirebaseService) {
    firebaseService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.Heroes = heroes;
      this.herosChanged.next(this.getHeroes());
    });
  }

  getHeroes() {
    return [...this.Heroes];
  }

  getHero(index: number) {
    if (this.Heroes.length === 0) {
      return new SuperHero('', '', '', '');
    }
    return this.Heroes[index];
  }

  setSelected(index: number) {
    this.selectedHero = this.Heroes[index];
    this.heroSubject.next(this.selectedHero);
  }

  getSelected() {
    return this.selectedHero;
  }

  deleteHero(index: number) {
    // this.Heroes = this.Heroes.filter(hero => hero.id !== id);
    this.herosChanged.next(this.getHeroes());
  }
}
