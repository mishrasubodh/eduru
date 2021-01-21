import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachUsEduruComponent } from './teach-us-eduru.component';

describe('TeachUsEduruComponent', () => {
  let component: TeachUsEduruComponent;
  let fixture: ComponentFixture<TeachUsEduruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachUsEduruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachUsEduruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
