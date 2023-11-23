import { TestBed } from '@angular/core/testing';

import { IncrementalMainService } from './incremental-main.service';

describe('IncrementalMainService', () => {
  let service: IncrementalMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementalMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
