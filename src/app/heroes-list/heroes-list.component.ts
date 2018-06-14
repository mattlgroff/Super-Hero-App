import { SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../models/superhero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  constructor(private superheroService: SuperheroService) {}

  Heroes: SuperHero[];

  ngOnInit() {
    this.Heroes = this.superheroService.getHeroes();
    this.superheroService.herosChanged.subscribe((heros: SuperHero[]) => {
      this.Heroes = heros;
    });
  }

  onClick(index: number) {
    this.superheroService.setSelected(index);
  }
}
