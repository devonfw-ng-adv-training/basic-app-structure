import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksOnShelfComponent } from './books-on-shelf.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Collections, NgRxBook } from '../model/models';

describe('BooksOnShelfComponent', () => {
  let component: BooksOnShelfComponent;
  let fixture: ComponentFixture<BooksOnShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BooksOnShelfComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOnShelfComponent);
    component = fixture.componentInstance;
    component.book = new NgRxBook('Le Petit Prince', Collections.TO_READ);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
