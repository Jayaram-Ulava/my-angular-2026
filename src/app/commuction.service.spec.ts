import { TestBed } from '@angular/core/testing';

import { CommuctionService } from './commuction.service';

describe('CommuctionService', () => {
  let service: CommuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
