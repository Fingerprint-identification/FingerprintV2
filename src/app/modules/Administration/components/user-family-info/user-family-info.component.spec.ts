import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFamilyInfoComponent } from './user-family-info.component';

describe('UserFamilyInfoComponent', () => {
  let component: UserFamilyInfoComponent;
  let fixture: ComponentFixture<UserFamilyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFamilyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
