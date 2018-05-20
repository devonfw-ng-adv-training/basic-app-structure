import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { BooksLoaded, LOAD_BOOKS } from './actions';
import { concatMap, map } from 'rxjs/operators';
import { ShelfService } from '../services/shelf.service';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private shelfSvc: ShelfService) {}

  @Effect()
  fetchBooks$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_BOOKS),
    concatMap(() => this.shelfSvc.fetchBooks()),
    map(books => new BooksLoaded(books)),
  );
}
