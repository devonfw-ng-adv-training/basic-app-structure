import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOnSelfComponent } from './books-on-self.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Collections, NgRxBook } from '../model/models';

describe('BooksOnSelfComponent', () => {
  let component: BooksOnSelfComponent;
  let fixture: ComponentFixture<BooksOnSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BooksOnSelfComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOnSelfComponent);
    component = fixture.componentInstance;
    component.book = new NgRxBook('Le Petit Prince', Collections.TO_READ);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
