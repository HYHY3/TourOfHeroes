import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROESLIST } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  allHeroes = HEROESLIST;
}
