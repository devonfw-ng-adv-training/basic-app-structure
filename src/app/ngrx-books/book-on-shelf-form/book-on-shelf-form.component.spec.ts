import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOnShelfFormComponent } from './book-on-shelf-form.component';

describe('BookOnShelfFormComponent', () => {
  let component: BookOnShelfFormComponent;
  let fixture: ComponentFixture<BookOnShelfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOnShelfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOnShelfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
