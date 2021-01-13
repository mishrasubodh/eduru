import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfileViewComponent } from './dashboard-profile-view.component';

describe('DashboardProfileViewComponent', () => {
  let component: DashboardProfileViewComponent;
  let fixture: ComponentFixture<DashboardProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
