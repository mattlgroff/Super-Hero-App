import { SuperheroService } from "./../superhero.service";
import { Component, OnInit } from "@angular/core";
import { SuperHero } from "../../models/superhero";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  selected: SuperHero = new SuperHero("", "", "", "");

  constructor(
    private superheroService: SuperheroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.superheroService.heroSubject.subscribe((hero: SuperHero) => {
      this.selected = hero;
    });

    this.route.paramMap.subscribe((params: Params) => {
      this.selected = params.get("hero");
    });
  }

  onDeploy(index) {
    this.superheroService.deleteHero(index);
    this.selected = undefined;
  }
}
