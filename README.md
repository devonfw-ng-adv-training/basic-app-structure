# BookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Integrating ngrx

### Step 6

* Install `@ngrx/router-store` package
* Register route reducer and serializer
* Show some info when books are loading
* Tweak existing effect so that it starts loading books both on `ROUTER_NAVIGATION`
  and on `LOAD_BOOKS` actions

### Step 5

* Remove unused methods from `ShelfService`
* Add `ShelfService.fetchBooks` method that will return books with some delay, 
  to emulate the HTTP request behaviour
* Be sure that `ShelfService` returns other titles than in the default state
* Install `@ngrx/effects` package
* Add `LoadBooks` and `BooksLoaded` actions, handle them in the reducer
* Write an effect that reloads books on `LoadBooks` action 
  and emits `BooksLoaded` action  
* Register the effect with `EffectsModule.forRoot`
* Add a button that will dispatch `LoadBooks` action

### Step 4

* Handle updating book in the reducer:
  * Notice that there's no invariant property, so introduce `id`
  * Assign unique id to a `NgrxBook`, use `uuid` package
  * Handle an update action that carries an `id` 
* Test the reducer
* Dispatch the update action on book move (`BookShelfComponent`)

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
