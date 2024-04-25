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

  constructor(private heroConfig: HeroServiceService) {

  }

  getMyHeroes() {
    this.heroConfig.getAllHeroes().subscribe(gotHeroes => this.allHeroes = gotHeroes);
  }

  ngOnInit() {
    this.getMyHeroes();
  }

  onAddHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroConfig.addHero(
      { name } as Hero
    ).subscribe(
      hero => {
        this.allHeroes.push(hero);
      }
    );
  }
}