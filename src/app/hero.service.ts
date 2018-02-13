import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _AFTER_ fetching the Heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
