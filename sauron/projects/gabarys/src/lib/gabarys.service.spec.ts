import { TestBed } from '@angular/core/testing';

import { gabaritsService } from './gabarits.service';

describe('gabaritsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: gabaritsService = TestBed.get(gabaritsService);
    expect(service).toBeTruthy();
  });
});
