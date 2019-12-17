import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {MyServcie} from './MyCourse.service';
import { HttpservicesComponent } from './httpservices/httpservices.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HttpservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyServcie],
  bootstrap: [AppComponent]
})
export class AppModule { }
