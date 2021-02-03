import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service'
import { Router } from "@angular/router";
import { PopupService } from '../services/popup.service'
import { AuthserviceService } from '../services/authservice.service'
 
@Component({
  selector: 'app-education-course',
  templateUrl: './education-course.component.html',
  styleUrls: ['./education-course.component.scss']
})
export class EducationCourseComponent implements OnInit {
  category:[]
  subCategory:[]
  constructor(
    private router: Router,
    public globalService : GlobalService,
    public msgService: PopupService,
    public authservice: AuthserviceService
  ) { }

  ngOnInit() {
    this.categoryes()
  }
  openCourseDetail(){
    this.router.navigate(['course-detail']);
    this.globalService.scrolData()
    
  }

  categoryes() {
    this.authservice.getCategory().subscribe((data) => {
      console.log("data :>> ", data);
      if (data != null || data != undefined) {
        this.category = data["category"];
        this.subCategory = data["subCategory"];
      }
    });
  }
}
