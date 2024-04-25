import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../hero-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  @Input()
  currentHero:Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const heroID = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(heroID)
      .subscribe(heroTemp => this.currentHero = heroTemp);
  }

  onGoBack(): void {
    this.location.back();
  }

  onSave(): void {
    if (this.currentHero) {
      this.heroService.updateHero(this.currentHero)
        .subscribe(() => this.onGoBack());
    }
  }
}
