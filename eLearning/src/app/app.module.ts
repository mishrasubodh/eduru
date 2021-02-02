import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { TypingCarouselDirective } from 'ng2-typing-carousel';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { EducationCourseComponent } from './education-course/education-course.component';
import { ProfessionalCourseComponent } from './professional-course/professional-course.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { VideoModalComponent } from './modal/video-modal/video-modal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'
import { ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule } from '@angular/forms';
import {PopupService} from './services/popup.service'
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component';
import { DashboardProfileViewComponent } from './dashboard-profile-view/dashboard-profile-view.component';
import { DashboardCourseViewComponent } from './dashboard-course-view/dashboard-course-view.component';
import { DashboardCourseEditComponent } from './dashboard-course-edit/dashboard-course-edit.component';
import { DashboardRevenueComponent } from './dashboard-revenue/dashboard-revenue.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component'
import {HTTP_INTERCEPTORS } from '@angular/common/http'
import {MyInterceptor} from './my-interceptor'
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { TeachUsEduruComponent } from './teach-us-eduru/teach-us-eduru.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component'
// Needs to import the BrowserAnimationsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // TypingCarouselDirective,
    BannerComponent,
    CardComponent,
    EducationCourseComponent,
    ProfessionalCourseComponent,
    AboutHomeComponent,
    InstructorComponent,
    TestimonialComponent,
    VideoModalComponent,
    RegisterComponent,
    LoginComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    SidebarComponent,
    DashboardProfileComponent,
    DashboardCourseComponent,
    DashboardProfileViewComponent,
    DashboardCourseViewComponent,
    DashboardCourseEditComponent,
    DashboardRevenueComponent,
    DashboardChatComponent,
    CourseDetailComponent,
    CoursePageComponent,
    TeachUsEduruComponent,
    VerifyOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    HttpClientModule, 
    FormsModule      
 
  ],
  entryComponents: [
    VideoModalComponent
  ],
  providers: [PopupService,{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
