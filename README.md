# BookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Integrating ngrx

### Step 3

* Refactor `BooksShelfComponent` to use `| async`
* Extract books selection logic to `store/selectors.ts`, use `createSelector` function,
* Write a unit test for your reducer

### Step 2

* Inject `Store<NgrxModuleState>` to component, get books with `select` operator
* Use the store to render books in `BooksShelf`:
  * Select all book items,
  * Assign them to existing `books: NgRxBook[]` (temporarily)
  * Map book collection to a filtered one, based on `this.mode`

### Step 1

* Install `@ngrx/store` package
* Write your first reducer, hint: `(State, Action) => State`
* Add initial, default state to your reducer 
* Wire up the reducer with the module using `StoreModule.forRoot` method and `ActionReducerMap`
