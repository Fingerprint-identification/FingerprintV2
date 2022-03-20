import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchedInfoComponent } from './user-searched-info.component';

describe('UserSearchedInfoComponent', () => {
  let component: UserSearchedInfoComponent;
  let fixture: ComponentFixture<UserSearchedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
