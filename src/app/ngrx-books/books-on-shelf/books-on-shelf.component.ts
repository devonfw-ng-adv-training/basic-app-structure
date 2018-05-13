import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Collections, NgRxBook} from '../model/models';

@Component({
  selector: 'app-books-on-shelf',
  templateUrl: './books-on-shelf.component.html',
  styleUrls: ['./books-on-shelf.component.scss']
})
export class BooksOnShelfComponent implements  OnInit {
  @HostBinding('class.to_read') to_read;
  @HostBinding('class.reading') reading;
  @HostBinding('class.read') read;


  @Input()
  book: NgRxBook;

  @Output()
  collectionChange = new EventEmitter<{ book: NgRxBook, newCollection: Collections }>();



  ngOnInit(): void {
    this.to_read = this.book.collection === Collections.TO_READ;
    this.reading = this.book.collection === Collections.READING;
    this.read = this.book.collection === Collections.READ;
  }


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

  private moveTo(collection: Collections) {
    this.collectionChange.next({book: this.book, newCollection: collection});
  }

  private isNot(collection) {
    return this.book.collection !== collection;
  }

}
