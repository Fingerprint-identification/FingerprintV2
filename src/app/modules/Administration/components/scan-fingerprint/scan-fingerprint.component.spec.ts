import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanFingerprintComponent } from './scan-fingerprint.component';

describe('ScanFingerprintComponent', () => {
  let component: ScanFingerprintComponent;
  let fixture: ComponentFixture<ScanFingerprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanFingerprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
