import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
currentID
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.currentID= localStorage.getItem('currentUserID')
  }

  openDashboard(){
    this.router.navigate(['dashboard/', this.currentID]);
  }
  openDashboardProfile(){
    this.router.navigate(['dashboard-profile']);
  }
  openDashboardProfileView(){
    this.router.navigate(['dashboard-profile-view']);
  }
  openDashboardCourse(){
    this.router.navigate(['dashboard-course']);
  }
  openDashboardRevenue(){
    this.router.navigate(['dashboard-revenue']);
  }
  openDashboardChat(){
    this.router.navigate(['dashboard-chat']);
  }
}



