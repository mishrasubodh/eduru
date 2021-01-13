import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-course-view',
  templateUrl: './dashboard-course-view.component.html',
  styleUrls: ['./dashboard-course-view.component.scss']
})
export class DashboardCourseViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openDashboardCourseEdit(){
    this.router.navigate(['dashboard-course-edit']);
  }
}
