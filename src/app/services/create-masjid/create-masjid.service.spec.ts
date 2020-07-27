import { TestBed } from '@angular/core/testing';

import { CreateMasjidService } from './create-masjid.service';

describe('CreateMasjidService', () => {
  let service: CreateMasjidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMasjidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
