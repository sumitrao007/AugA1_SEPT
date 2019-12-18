import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {MyServcie} from './MyCourse.service';
import { HttpservicesComponent } from './httpservices/httpservices.component';
import {HttpModule} from '@angular/http';
import { MyHttpserviceComponent } from './my-httpservice/my-httpservice.component';
import { MyHttpService } from './my-http.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HttpservicesComponent,
    MyHttpserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MyServcie,
    MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
