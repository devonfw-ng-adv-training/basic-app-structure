import {Injectable} from '@angular/core';
import {Collections, NgRxBook} from '../model/models';

@Injectable()
export class ShelfService {

  books: NgRxBook[] = [];


  constructor() {
    this.books.push(new NgRxBook('Gra o Tron', Collections.TO_READ));
    this.books.push(new NgRxBook('Wiedźmin', Collections.READING));
    this.books.push(new NgRxBook('Władca Pierscienia', Collections.READ));
    this.books.push(new NgRxBook('JS The Good Parts', Collections.TO_READ));
    this.books.push(new NgRxBook('Clean Code', Collections.READ));
    this.books.push(new NgRxBook('You don\'t know JS', Collections.READING));

  }

  getBooks() {
    return this.books;

  }

  getBooksToRead(): NgRxBook[] {
    return this.books.filter(book => book.collection === Collections.TO_READ);
  }

  getBooksReading(): NgRxBook[] {
    return this.books.filter(book => book.collection === Collections.READING);

  }

  getBookRead(): NgRxBook[] {
    return this.books.filter(book => book.collection === Collections.READ);

  }

  addBook(book: NgRxBook) {
    this.books.push(book);
  }

}
