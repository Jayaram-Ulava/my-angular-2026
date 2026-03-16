import { TestBed } from '@angular/core/testing';

import { IdcardsService } from './idcards.service';

describe('IdcardsService', () => {
  let service: IdcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
