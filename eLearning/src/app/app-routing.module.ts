import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutHomeComponent} from './about-home/about-home.component'
import {RegisterComponent} from "./register/register.component"
import {LoginComponent} from './login/login.component'
import { ForgetpasswordComponent} from './forgetpassword/forgetpassword.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component'
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component'
import { DashboardProfileViewComponent } from './dashboard-profile-view/dashboard-profile-view.component'
import { DashboardCourseViewComponent } from './dashboard-course-view/dashboard-course-view.component'
import { DashboardCourseEditComponent } from './dashboard-course-edit/dashboard-course-edit.component'
import { DashboardRevenueComponent } from './dashboard-revenue/dashboard-revenue.component'
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'abouthome', component: AboutHomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget', component: ForgetpasswordComponent},
  {path: 'dashboard/:id', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'dashboard-profile', component: DashboardProfileComponent},
  {path: 'dashboard-course', component: DashboardCourseComponent},
  {path: 'dashboard-profile-view', component: DashboardProfileViewComponent},
  {path: 'dashboard-course-view', component: DashboardCourseViewComponent},
  {path: 'dashboard-course-edit', component: DashboardCourseEditComponent},
  {path: 'dashboard-revenue', component: DashboardRevenueComponent},
  {path: 'dashboard-chat', component: DashboardChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
