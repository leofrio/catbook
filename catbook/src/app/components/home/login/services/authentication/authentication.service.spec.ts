import { TestBed } from '@angular/core/testing';

import { authenticationService } from './authentication.service';

describe('authenticationService', () => {
  let service: authenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
