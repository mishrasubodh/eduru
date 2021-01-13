import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatButtonModule } from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';
@Component({
  selector: 'app-dashboard-course',
  templateUrl: './dashboard-course.component.html',
  styleUrls: ['./dashboard-course.component.scss']
})
export class DashboardCourseComponent implements OnInit {
course={
  name:'',
  category:'',
  amount:'',
  description:'',
  videoUrl:''
}
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openDashboardCourseView(){
    this.router.navigate(['dashboard-course-view']);
  }

  getUrl(input){
    console.log(input.files);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('Got here: ', e.target.result);
        this.course.videoUrl = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  submit(userData){
    console.log('userdata :>> ', userData);
  }
}
