import { TestBed, inject } from '@angular/core/testing';

import { ReadingsService } from './readings.service';

describe('ReadingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadingsService]
    });
  });

  it('should be created', inject([ReadingsService], (service: ReadingsService) => {
    expect(service).toBeTruthy();
  }));
});
