import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../entities/hero.entity';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator

When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private http: HttpClient, private messageService: MessageService){
}

private heroesUrl = 'api/heroes';  // URL to web api

/*
You can't fetch data in synchronous way from backend, in real application.

If getHeroes() can't return immediately with hero data, it shouldn't be synchronous, 
because that would block the browser as it waits to return data.

HeroService.getHeroes() should returns an Observable so that it can use the Angular 
HttpClient.get method to fetch the heroes and have HttpClient.get() return an Observable.
*/
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
      this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  
}
