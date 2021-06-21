import { ComponentFixture, TestBed } from '@angular/core/testing';
import { commonTestingModules, commonTestingProviders } from '../common/common.testing';

import { HomeComponent } from './home.component';
import { createComponentMock } from 'angular-unit-test-helper';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, createComponentMock('LoginComponent')],
      providers: commonTestingProviders,
      imports: commonTestingModules
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
