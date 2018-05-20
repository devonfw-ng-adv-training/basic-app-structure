import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BooksShelfComponent} from './books-shelf/books-shelf.component';
import {BooksOnShelfComponent} from './books-on-shelf/books-on-shelf.component';
import {ShelfService} from './services/shelf.service';
import {BookOnShelfFormComponent} from './book-on-shelf-form/book-on-shelf-form.component';
import { reducersMap } from './store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'shelf',
      component: BooksShelfComponent,
    }, {
      path: 'shelf/:collection',
      component: BooksShelfComponent,
    }]),
    StoreModule.forRoot(reducersMap),
  ],
  declarations: [BooksShelfComponent, BooksOnShelfComponent, BookOnShelfFormComponent],
  providers: [ShelfService]
})
export class NgrxBooksModule {
}

