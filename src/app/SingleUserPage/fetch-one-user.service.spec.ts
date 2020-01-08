import { TestBed } from '@angular/core/testing';

import { FetchOneUserService } from './fetch-one-user.service';

describe('FetchOneUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchOneUserService = TestBed.get(FetchOneUserService);
    expect(service).toBeTruthy();
  });
});
