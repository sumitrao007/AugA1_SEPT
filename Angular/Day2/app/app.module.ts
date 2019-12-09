import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { StudentComponent } from './student.component';
import { PrpoetyDemoComponent } from './prpoety-demo/prpoety-demo.component';
import { MycompponentComponent } from './mycompponent/mycompponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    PrpoetyDemoComponent,
    MycompponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
