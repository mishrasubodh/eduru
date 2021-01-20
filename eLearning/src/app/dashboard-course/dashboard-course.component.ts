import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatButtonModule } from '@angular/material';
import {AuthserviceService} from '../services/authservice.service'
// import { MatFileUploadModule } from 'angular-material-fileupload';
@Component({
  selector: 'app-dashboard-course',
  templateUrl: './dashboard-course.component.html',
  styleUrls: ['./dashboard-course.component.scss']
})
export class DashboardCourseComponent implements OnInit {
  myFiles:string [] = [];
  sMsg:string = '';
  category=[]
  selectcatery={}
  subCategory
course={
  name:'',
  category:'',
  SubCategory:'',
  amount:'',
  description:'',
  videoUrl:''
}
  constructor(
    private router: Router,
    public services:AuthserviceService
  ) { }

  ngOnInit() {
    this.categoryes()
  }
  openDashboardCourseView(){
    this.router.navigate(['dashboard-course-view']);
  }
  SelectCat(selectCat){
    console.log('selectCatselectCatselectCat :>> ', selectCat);
  }
  SelectSubCat(subCat){
    console.log("subCatsubCatsubCatsubCatsubCat",subCat)
  }
categoryes(){
   this.services.getCategory().subscribe(data=>{
    console.log('data :>> ', data);
    if(data!=null||data!=undefined ){
      this.category=data['category']
      this.subCategory=data['sub_category']
    }
   console.log('this.subCategorythis.subCategorythis.subCategory :>> ', this.subCategory);
  }) 
}

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log("files ",this.myFiles)
  }

  uploadFiles () {
    const frmData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("fileUpload", this.myFiles[i]);
    }

    console.log('frmData :>> ', frmData);
  }
  submit(userData){
    console.log('userdata :>> ', userData);
  }
}
