import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  userName!: string;
  password!: string;
  mouseoverLogin!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  login(formValue: any) {
    console.log(formValue)
  }

}
