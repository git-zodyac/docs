import { TestBed } from '@angular/core/testing';

import { RouterSpinnerService } from './router-spinner.service';

describe('RouterSpinnerService', () => {
  let service: RouterSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
