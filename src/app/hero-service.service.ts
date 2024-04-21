import { Injectable } from '@angular/core';
import { HEROESLIST } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  constructor() { }

  getAllHeroes():Observable<Hero[]>{
    //return HEROESLIST;
    //const allHeroes = of(HEROESLIST);
    //return allHeroes;
    return of(HEROESLIST);
  }
}
