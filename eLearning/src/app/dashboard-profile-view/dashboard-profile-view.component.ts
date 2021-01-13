import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard-profile-view',
  templateUrl: './dashboard-profile-view.component.html',
  styleUrls: ['./dashboard-profile-view.component.scss']
})
export class DashboardProfileViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openDashboardProfile(){
    this.router.navigate(['dashboard-profile']);
  }
}
