import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySearchedInfoComponent } from './family-searched-info.component';

describe('FamilySearchedInfoComponent', () => {
  let component: FamilySearchedInfoComponent;
  let fixture: ComponentFixture<FamilySearchedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilySearchedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilySearchedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
