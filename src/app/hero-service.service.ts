import { Injectable } from '@angular/core';
import { HEROESLIST } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  constructor(private messageConfig: MessageService) {
  }

  getAllHeroes(): Observable<Hero[]> {
    //return HEROESLIST;
    //const allHeroes = of(HEROESLIST);
    //return allHeroes;
    this.messageConfig.addInfo("HeroService: fetched heroes");
    return of(HEROESLIST);
  }

  getHero(id: number): Observable<Hero> {
    const heroInfo = HEROESLIST.find(heroInfo => heroInfo.id === id)!;
    this.messageConfig.addInfo(`HeroService: fetched hero id=${id}`);
    return of(heroInfo);
  }
}
