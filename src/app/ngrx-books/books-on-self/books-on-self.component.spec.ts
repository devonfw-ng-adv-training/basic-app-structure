import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOnSelfComponent } from './books-on-self.component';

describe('BooksOnSelfComponent', () => {
  let component: BooksOnSelfComponent;
  let fixture: ComponentFixture<BooksOnSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksOnSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOnSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
