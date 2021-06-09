import { InMemoryAuthService } from './auth.inmemory.service';
import { TestBed } from '@angular/core/testing';

describe('InMemoryAuthService', () => {
  let service: InMemoryAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
