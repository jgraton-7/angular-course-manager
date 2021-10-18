import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Error404/Error404.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { courseModule } from './courses/course.module';
//import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
//import { CourseModule } from './courses/course.module';
//import { StarComponent } from './star/star.component';
//import { CourseListComponent } from './courses/course-list.component';
//import { ReplacePipe } from './pipe/replace.pipe';
//import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    //NavBarComponent,
    //StarComponent,
    //CourseListComponent,
    //ReplacePipe,
    //CourseInfoComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    courseModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**' , component: Error404Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


