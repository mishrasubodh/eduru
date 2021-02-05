import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service'
import { Router,ActivatedRoute } from "@angular/router";
import { PopupService } from '../services/popup.service'
import { AuthserviceService } from '../services/authservice.service'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  currentteacherID
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public globalService : GlobalService,
    public msgService: PopupService,
    public authservice: AuthserviceService
  ) {
    if( this.route.snapshot.paramMap.get('id')){
      localStorage.setItem('currentteacherID',this.route.snapshot.paramMap.get('id'))
      this.currentteacherID= localStorage.getItem('currentteacherID')
       }
   }

  ngOnInit() {
    console.log('object :>> ', this.currentteacherID);
  }
 getcurrentTeacherVideoDetail(id){
  this.authservice.currenteacherMeterailData(id).subscribe(data=>{
console.log('data in course detail :>> ', data);
  },err=>{
this.msgService.openSnackBar('err',true)
  })
 }
}
