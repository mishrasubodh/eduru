import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openAboutUS(){
    console.log('working');
    this.router.navigate(['abouthome']);
  }
  openHome(){
    this.router.navigate(['home']);
  }
  openLogin(){
    this.router.navigate(['login']);
  }
  openteachUspage(){
    this.router.navigate(['teach-us-eduru']);
  }
 

  goCoursePage(){
    this.router.navigate(['course-page']);
  }
  

}
