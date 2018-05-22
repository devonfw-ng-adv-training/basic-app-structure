import {booksReducer, initialBooksState} from './reducers';
import {Collections, NgRxBook} from '../model/models';
import {AddBook, UpdateBook} from './actions';

describe('Books reducer', () => {
  it('should default to initial state', () => {
    const stateBefore = undefined;
    const action = {type: '@ngrx/store/init'};
    const expectedState = initialBooksState;
    const stateAfter = booksReducer(stateBefore, action);
    expect(stateAfter).toEqual(expectedState);
  });

  it('should update a book', () => {
    const book = new NgRxBook('Le Petit Prince', Collections.TO_READ);
    const updatedBook: NgRxBook = {...book, collection: Collections.READING};
    const stateBefore = {
      items: [book],
      loading: false,
  }
    ;
    const action = new UpdateBook(updatedBook);
    const expectedState = {
      items: [updatedBook],
      loading: false,
    };
    const stateAfter = booksReducer(stateBefore, action);
    expect(stateAfter).toEqual(expectedState);
  });
  it('should add a book', () => {
    const book = new NgRxBook('Le Petit Prince', Collections.TO_READ);
    const stateBefore = {
      items: [],
      loading: false,
  }
    ;
    const action = new AddBook(book);
    const expectedState = {
      items: [book],
      loading: false,
    };
    const stateAfter = booksReducer(stateBefore, action);
    expect(stateAfter).toEqual(expectedState);
  });
});
