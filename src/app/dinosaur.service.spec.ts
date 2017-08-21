import { TestBed, inject } from '@angular/core/testing';

import { DinosaurService } from './dinosaur.service';

describe('DinosaurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaurService]
    });
  });

  it('should ...', inject([DinosaurService], (service: DinosaurService) => {
    expect(service).toBeTruthy();
  }));
});
