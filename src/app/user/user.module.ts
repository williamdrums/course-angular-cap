import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';



@NgModule({
    declarations: [
       ProfileComponent,
       LoginComponent,
       Login2Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
})
export class UserModule {


}