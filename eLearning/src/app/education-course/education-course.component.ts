import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-education-course',
  templateUrl: './education-course.component.html',
  styleUrls: ['./education-course.component.scss']
})
export class EducationCourseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openCourseDetail(){
    this.router.navigate(['course-detail']);
  }
}
