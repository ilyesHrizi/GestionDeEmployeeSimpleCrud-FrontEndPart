import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetails3Component } from './employee-details3.component';

describe('EmployeeDetails3Component', () => {
  let component: EmployeeDetails3Component;
  let fixture: ComponentFixture<EmployeeDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
