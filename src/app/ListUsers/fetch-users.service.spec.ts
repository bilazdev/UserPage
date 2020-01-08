import { TestBed } from '@angular/core/testing';

import { FetchUsersService } from './fetch-users.service';

describe('FetchUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchUsersService = TestBed.get(FetchUsersService);
    expect(service).toBeTruthy();
  });
});
