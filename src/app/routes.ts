import { CreateSessionComponent } from './events/create-session/create-session.component';

import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';
import {
    EventsListComponent, EventDetailsComponent, CreateEventComponent, EventListResolver
} from './events/index';

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent },
    {
        path: 'events', component: EventsListComponent, resolve:
            { events: EventListResolver }
    },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }

]