import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCourseEditComponent } from './dashboard-course-edit.component';

describe('DashboardCourseEditComponent', () => {
  let component: DashboardCourseEditComponent;
  let fixture: ComponentFixture<DashboardCourseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCourseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
