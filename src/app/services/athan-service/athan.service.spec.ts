import { TestBed } from '@angular/core/testing';

import { AthanService } from './athan.service';

describe('AthanService', () => {
  let service: AthanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
