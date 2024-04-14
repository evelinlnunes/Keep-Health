import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dietChildGuard } from './diet-child.guard';

describe('dietChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dietChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
