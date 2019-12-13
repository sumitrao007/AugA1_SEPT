import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {FormsModule} from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,
    Eventbinding2Component,
    TwowaybindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
