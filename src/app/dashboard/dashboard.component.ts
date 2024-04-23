import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  allHeroesList: Hero[] = [];

  constructor(private heroService: HeroServiceService) {

  }

  getAllHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(heroesInfo => this.allHeroesList = heroesInfo.slice(1, 5));
  }

  ngOnInit(): void {
    this.getAllHeroes();
  }
}
