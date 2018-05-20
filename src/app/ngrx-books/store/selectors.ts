import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './reducers';
import { NgRxBook } from '../model/models';

export const selectBooksState = createFeatureSelector('books');
export const selectBookItems = createSelector(
  selectBooksState,
  (booksState: BooksState): NgRxBook[] => booksState.items
);
