import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../entities/hero.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*
  
  Returns the sliced list of heroes at positions 1 and 5, returning only Heroes two, three, four, and five.
  
  */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
