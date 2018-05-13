import {Component, OnInit} from '@angular/core';
import {Collections} from '../model/models';
import {ShelfService} from '../services/shelf.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private shelfService: ShelfService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {

      console.log(params);
      this.mode = params.collection;
      this.getData();

    });

  }

  private getData() {

    switch (this.mode) {
      case Collections.READ : {
        this.books = this.shelfService.getBookRead();
        this.title = 'Books already read';
        return;
      }
      case Collections.READING : {
        this.books = this.shelfService.getBooksReading();
        this.title = 'Books currently reading';

        return;
      }
      case Collections.TO_READ : {
        this.books = this.shelfService.getBooksToRead();
        this.title = 'Books to read';

        return;
      }
      default: {
        this.books = this.shelfService.getBooks();
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
