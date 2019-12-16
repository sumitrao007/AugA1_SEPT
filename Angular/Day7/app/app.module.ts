import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuildpipeComponent } from './inbuildpipe/inbuildpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { MyPipe } from './custompipe/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InbuildpipeComponent,
    CustompipeComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
