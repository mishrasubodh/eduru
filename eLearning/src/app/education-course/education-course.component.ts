import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-education-course',
  templateUrl: './education-course.component.html',
  styleUrls: ['./education-course.component.scss']
})
export class EducationCourseComponent implements OnInit {

  constructor(
    private router: Router,
    public globalService : GlobalService,
  ) { }

  ngOnInit() {
  }
  openCourseDetail(){
    this.router.navigate(['course-detail']);
    this.globalService.scrolData()
    
  }
}
