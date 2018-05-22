import {Component, OnInit} from '@angular/core';
import { Collections, NgRxBook } from '../model/models';
import {ShelfService} from '../services/shelf.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { NgrxModuleState } from '../store';
import { Store, select } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { selectBookItems } from '../store/selectors';
import {AddBook, LoadBooks, UpdateBook} from '../store/actions';

@Component({
  selector: 'app-books-shelf',
  templateUrl: './books-shelf.component.html',
  styleUrls: ['./books-shelf.component.scss']
})
export class BooksShelfComponent implements OnInit {
  books: Observable<NgRxBook[]> = of([]);
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
    this.books = this.store$
      .pipe(
        select(selectBookItems),
        map((bookItems: NgRxBook[]) => this.mode ?
          bookItems.filter(book => book.collection === this.mode) :
          bookItems
        )
      );

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
    this.store$.dispatch(new UpdateBook({
      ...book,
      collection: newCollection,
    }));
  }

  newBookHandler(newBook) {
    this.shelfService.addBook(newBook);
    this.store$.dispatch(new AddBook(newBook));
  }

  loadBooks() {
    this.store$.dispatch(new LoadBooks());
  }
}
