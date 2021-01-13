import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCourseViewComponent } from './dashboard-course-view.component';

describe('DashboardCourseViewComponent', () => {
  let component: DashboardCourseViewComponent;
  let fixture: ComponentFixture<DashboardCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCourseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
