import { Login2Component } from './login2/login2.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile.component';


export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component }
]