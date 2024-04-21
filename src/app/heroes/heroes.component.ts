import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  allHeroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private heroConfig: HeroServiceService) {

  }

  onSelecteHero(heroValue: Hero) {
    this.selectedHero = heroValue;
    //window.alert("an hero has been selected");
  }

  getMyHeroes() {
    this.heroConfig.getAllHeroes().subscribe(gotHeroes => this.allHeroes = gotHeroes);
  }

  ngOnInit() {
    this.getMyHeroes();
  }

}
