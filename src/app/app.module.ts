import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallcourseComponent } from './viewallcourse/viewallcourse.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddcourseComponent
  },
  {
    path:"viewallcourse",component:ViewallcourseComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    NavbarComponent,
    ViewallcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
