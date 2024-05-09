import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../entities/hero.entity';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /**
  
  debounceTime(300) waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. Requests aren't likely to happen more frequently than 300 ms.

  distinctUntilChanged() ensures that a request is sent only if the filter text changed.

  switchMap() calls the search service for each search term that makes it through debounce() and distinctUntilChanged(). It cancels and discards previous search observables, returning only the latest search service observable.

   */
  
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}

