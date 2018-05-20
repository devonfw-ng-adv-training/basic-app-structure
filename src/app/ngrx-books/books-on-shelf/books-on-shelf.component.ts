import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Collections, NgRxBook} from '../model/models';

@Component({
  selector: 'app-books-on-shelf',
  templateUrl: './books-on-shelf.component.html',
  styleUrls: ['./books-on-shelf.component.scss']
})
export class BooksOnShelfComponent {
  @Input()
  book: NgRxBook;

  @Output()
  collectionChange = new EventEmitter<{ book: NgRxBook, newCollection: Collections }>();

  isNotToRead() {
    return this.isNot(Collections.TO_READ);
  }

  isNotReading() {
    return this.isNot(Collections.READING);
  }

  isNotRead() {
    return this.isNot(Collections.READ);
  }

  moveToRead() {
    this.moveTo(Collections.READ);
  }

  moveToReading() {
    this.moveTo(Collections.READING);
  }

  moveToToRead() {
    this.moveTo(Collections.TO_READ);
  }

  getCategoryName() {
    switch (this.book.collection) {
      case Collections.READING: {
        return 'Currently reading';
      }
      case Collections.TO_READ: {
        return 'To Read';
      }
      case Collections.READ: {
        return 'Already Read';
      }

    }
  }

  private moveTo(collection: Collections) {
    this.collectionChange.next({book: this.book, newCollection: collection});
  }

  private isNot(collection) {
    return this.book.collection !== collection;
  }
}
