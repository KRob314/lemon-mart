import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InMemoryAuthService } from './auth.inmemory.service';
import { TestBed } from '@angular/core/testing';
import { UiService } from '../common/ui.service';
import { autoSpyObj } from 'angular-unit-test-helper';

describe('InMemoryAuthService', () => {
  let service: InMemoryAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, {provide: UiService, useValue: autoSpyObj(UiService)}]
    });
    service = TestBed.inject(InMemoryAuthService);
  });

  it('should be created', () => {
    console.log('in mem');
    console.log(service);
    expect(service).toBeTruthy();
  });
});
