import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { EducationCourseComponent } from './education-course/education-course.component';
import { ProfessionalCourseComponent } from './professional-course/professional-course.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import {VideoModalComponent} from './modal/video-modal/video-modal.component'

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
    TestimonialComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    VideoModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
