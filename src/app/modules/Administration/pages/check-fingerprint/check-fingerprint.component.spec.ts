import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFingerprintComponent } from './check-fingerprint.component';

describe('CheckFingerprintComponent', () => {
  let component: CheckFingerprintComponent;
  let fixture: ComponentFixture<CheckFingerprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckFingerprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
