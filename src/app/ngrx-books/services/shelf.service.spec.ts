import { TestBed, inject } from '@angular/core/testing';

import { ShelfService } from './shelf.service';

describe('ShelfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShelfService]
    });
  });

  it('should be created', inject([ShelfService], (service: ShelfService) => {
    expect(service).toBeTruthy();
  }));
});
