import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent implements OnInit {
  allHeroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
    this.allHeroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // Push a search term into the observable stream.
  onSearch(term: string): void {
    this.searchTerms.next(term);
  }

}
