import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formsValues: any) {
    this.authService.updateCurrentUser(formsValues.firstName, formsValues.lastName);
    this.router.navigate(['events']);
  }
}