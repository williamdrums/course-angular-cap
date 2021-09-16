import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from './common/toastr-service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {
  EventsListComponent, EventThumbnailComponent, EventService, EventDetailsComponent, CreateEventComponent,
  EventListResolver,CreateSessionComponent,SessionListComponent
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from 'src/nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';




@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventListResolver, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
