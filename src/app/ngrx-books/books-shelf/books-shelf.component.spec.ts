import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksShelfComponent } from './books-shelf.component';

describe('BooksShelfComponent', () => {
  let component: BooksShelfComponent;
  let fixture: ComponentFixture<BooksShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
