import { Login2Component } from './login2/login2.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile2Component } from './profile2/profile2.component';


export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'profile2', component: Profile2Component },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component }
]