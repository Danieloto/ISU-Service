import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, CheckUser } from '../models/user';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Email: String;
  Password: String;
  constructor() {}

  ngOnInit() {

  }

    Submit(form: any): void {
      console.log(form);
      const check: CheckUser = {
        Email: form.Email,
        Password: form.Password,
      };
  }
}
