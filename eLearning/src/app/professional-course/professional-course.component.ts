import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-professional-course',
  templateUrl: './professional-course.component.html',
  styleUrls: ['./professional-course.component.scss']
})
export class ProfessionalCourseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

openCourseDetail(){
    this.router.navigate(['course-detail']);
  }

}
