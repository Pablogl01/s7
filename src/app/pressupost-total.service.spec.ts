import { TestBed } from '@angular/core/testing';

import { PressupostTotalService } from './pressupost-total.service';

describe('PressupostTotalService', () => {
  let service: PressupostTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressupostTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
