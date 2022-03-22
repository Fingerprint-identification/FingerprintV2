import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorsComponentComponent } from './validation-errors-component.component';

describe('ValidationErrorsComponentComponent', () => {
  let component: ValidationErrorsComponentComponent;
  let fixture: ComponentFixture<ValidationErrorsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationErrorsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
