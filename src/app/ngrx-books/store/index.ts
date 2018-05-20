import { ActionReducerMap } from '@ngrx/store';
import { BooksState, booksReducer } from './reducers';

export interface NgrxModuleState {
  books: BooksState;
}

export const reducersMap: ActionReducerMap<NgrxModuleState> = ({
  books: booksReducer,
});
