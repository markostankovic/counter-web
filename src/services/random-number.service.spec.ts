/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomNumberService } from './random-number.service';

describe('RandomNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNumberService]
    });
  });

  it('should ...', inject([RandomNumberService], (service: RandomNumberService) => {
    expect(service).toBeTruthy();
  }));
});
