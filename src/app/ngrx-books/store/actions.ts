import { Action } from '@ngrx/store';
import { NgRxBook } from '../model/models';

export const UPDATE_BOOK = '[Books] Update';

export class UpdateBook implements Action {
  public readonly type: string = UPDATE_BOOK;
  constructor(public payload: Partial<NgRxBook>) {}
}
