import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisEnrollStudentComponent } from './dis-enroll-student.component';

describe('DisEnrollStudentComponent', () => {
  let component: DisEnrollStudentComponent;
  let fixture: ComponentFixture<DisEnrollStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisEnrollStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisEnrollStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
