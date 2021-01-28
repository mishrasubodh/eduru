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
  addActiveClass(){
    document.getElementById("asideID").classList.add("active");
  }

  removeActiveClass(){
    document.getElementById("asideID").classList.remove("active");
  }

  openAboutUS(){
    console.log('working');
    this.router.navigate(['abouthome']);
    this.removeActiveClass()
  }
  openHome(){
    this.router.navigate(['home']);
  }
  openLogin(){
    this.removeActiveClass()
    this.router.navigate(['login']);
  }
  openteachUspage(){
    this.removeActiveClass()
    this.router.navigate(['teach-us-eduru']);
  }
 

  goCoursePage(){
    this.router.navigate(['course-page']);
  }
  

}
