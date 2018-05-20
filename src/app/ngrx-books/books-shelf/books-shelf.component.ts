import {Component, OnInit} from '@angular/core';
import { Collections, NgRxBook } from '../model/models';
import {ShelfService} from '../services/shelf.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { NgrxModuleState } from '../store';
import { Store, select } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-books-shelf',
  templateUrl: './books-shelf.component.html',
  styleUrls: ['./books-shelf.component.scss']
})
export class BooksShelfComponent implements OnInit {
  books = [];
  title: string;
  mode: Collections | undefined;
  collections = Collections;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shelfService: ShelfService,
    private store$: Store<NgrxModuleState>,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.mode = params.collection;
      this.getData();
    });
  }

  private getData() {
    this.store$
      .pipe(
        select(state => state && state.books && state.books.items),
        map((bookItems: NgRxBook[]) => this.mode ?
          bookItems.filter(book => book.collection === this.mode) :
          bookItems
        )
      )
      .subscribe((bookItems: NgRxBook[]) => {
        this.books = bookItems; // TODO Do it like a human being
      });

    switch (this.mode) {
      case Collections.READ : {
        this.title = 'Books already read';
        return;
      }
      case Collections.READING : {
        this.title = 'Books currently reading';
        return;
      }
      case Collections.TO_READ : {
        this.title = 'Books to read';
        return;
      }
      default: {
        this.title = 'All my books';
      }
    }
  }

  changeCollectionHandler({book, newCollection}) {

    console.log(book, newCollection);

  }

  newBookHandler(newBook) {
    this.shelfService.addBook(newBook);
    this.getData();
  }

}
