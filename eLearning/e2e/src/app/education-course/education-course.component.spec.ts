import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCourseComponent } from './education-course.component';

describe('EducationCourseComponent', () => {
  let component: EducationCourseComponent;
  let fixture: ComponentFixture<EducationCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
