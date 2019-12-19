import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"PAGE1/:id",
    component:Page1Component
  },
  {
    path:"PAGE2/:id/:username",
    component:Page2Component
  },
  {
    path:"Follower",
    component:FollowerComponent
  },
  {
    path:"MyFollower",
    component:MyfollowerComponent
  },
  {
    path:"QueryParameter",
    component:QueryparameterComponent
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];


 
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
