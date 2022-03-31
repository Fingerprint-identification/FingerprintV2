import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIconsComponent } from './component-icons.component';

describe('ComponentIconsComponent', () => {
  let component: ComponentIconsComponent;
  let fixture: ComponentFixture<ComponentIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
