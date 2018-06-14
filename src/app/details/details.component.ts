import { SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../models/superhero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selected: SuperHero = new SuperHero('', '', '', '');

  constructor(
    private superheroService: SuperheroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.superheroService.heroSubject.subscribe((hero: SuperHero) => {
      this.selected = hero;
    });

    this.selected = this.superheroService.getHero(this.route.paramMap['hero']);
  }

  onDeploy(index) {
    this.superheroService.deleteHero(index);
    this.selected = undefined;
  }
}
