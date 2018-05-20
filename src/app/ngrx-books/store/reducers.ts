import { Collections, NgRxBook } from '../model/models';
import { Action } from '@ngrx/store';
import { UPDATE_BOOK, UpdateBook } from './actions';

export interface BooksState {
  items: NgRxBook[];
}

export const initialBooksState = {
  items: [
    new NgRxBook('Gra o Tron', Collections.TO_READ),
    new NgRxBook('Wiedźmin', Collections.READING),
    new NgRxBook('Władca Pierscienia', Collections.READ),
    new NgRxBook('JS The Good Parts', Collections.TO_READ),
    new NgRxBook('Clean Code', Collections.READ),
    new NgRxBook('You don\'t know JS', Collections.READING),
  ]
};

export function booksReducer(state: BooksState = initialBooksState, action: Action) {
  console.log('Books reducer called with:', state, action);
  switch (action.type) {
    case UPDATE_BOOK: {
      const { payload } = action as UpdateBook;
      const items = state.items.map(
        book => payload.id === book.id ?
          { ...book, ...payload} :
          book
      );
      return { ...state, items };
    }
    default:
      return state;
  }
}
