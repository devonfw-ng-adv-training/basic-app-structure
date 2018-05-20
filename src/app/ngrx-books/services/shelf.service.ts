import {Injectable} from '@angular/core';
import {Collections, NgRxBook} from '../model/models';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';

@Injectable()
export class ShelfService {

  books: NgRxBook[] = [];

  constructor() {
    this.books.push(new NgRxBook('Game of Thrones', Collections.TO_READ));
    this.books.push(new NgRxBook('The Witcher', Collections.READING));
    this.books.push(new NgRxBook('Lord of the Rings', Collections.READ));
    this.books.push(new NgRxBook('JS: The Good Parts, E2', Collections.TO_READ));
    this.books.push(new NgRxBook('Clean Code, E2', Collections.READ));
    this.books.push(new NgRxBook('You don\'t know JS, E2', Collections.READING));
  }

  fetchBooks() {
    return timer(3000).pipe(map(() => this.books));
  }

  addBook(book: NgRxBook) {
    this.books.push(book);
  }

}
