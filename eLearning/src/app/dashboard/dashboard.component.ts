import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import {AuthserviceService} from '../services/authservice.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
teacherID=''
currentTeacherData
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService :AuthserviceService

  ) { 
    if( this.route.snapshot.paramMap.get('id')){
   localStorage.setItem('teacherID',this.route.snapshot.paramMap.get('id'))
   this.teacherID= localStorage.getItem('teacherID')
    }
    
  }

  ngOnInit() {
   this.getTeacherInfo(this.teacherID)
  }
  getTeacherInfo(id){
  this.authService.loginTeacherData(id).subscribe(data=>{
    console.log('data :>> ', data);
    if(data['message']=='Success')
    this.currentTeacherData=data['data']
  })
  }
  openDashboardProfile(){
    this.router.navigate(['dashboard-profile']);
  }
  openDashboardProfileView(){
    this.router.navigate(['dashboard-profile-view']);
  }
}
