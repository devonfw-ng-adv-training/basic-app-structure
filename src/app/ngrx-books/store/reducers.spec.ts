import { booksReducer, initialBooksState } from './reducers';

describe('Books reducer', () => {
  it('should default to initial state', () => {
    const stateBefore = undefined;
    const action = { type: '@ngrx/store/init' };
    const expectedState = initialBooksState;
    const stateAfter = booksReducer(stateBefore, action);
    expect(stateAfter).toEqual(expectedState);
  });
});
