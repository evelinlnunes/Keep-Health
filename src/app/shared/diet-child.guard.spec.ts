import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { DietChildGuard } from './diet-child.guard';

describe('dietChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => {
    const guard = TestBed.inject(DietChildGuard); 
    return guard.canActivateChild(...guardParameters); 
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});