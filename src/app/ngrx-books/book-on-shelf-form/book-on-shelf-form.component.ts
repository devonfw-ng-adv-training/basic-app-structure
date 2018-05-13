import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Collections, NgRxBook} from '../model/models';

@Component({
  selector: 'app-book-on-shelf-form',
  templateUrl: './book-on-shelf-form.component.html',
  styleUrls: ['./book-on-shelf-form.component.scss']
})
export class BookOnShelfFormComponent implements OnInit {

  collections = Collections;

  @Output()
  newBook = new EventEmitter<NgRxBook>();


  constructor() {
  }

  ngOnInit() {
  }

  saveBook(title, collection) {
    this.newBook.next(new NgRxBook(title.value, collection.value));
    title.value = '';
    collection.value = '';
  }


}
