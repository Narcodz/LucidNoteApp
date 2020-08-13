import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["../auth-template.css"],
})
export class SigninComponent implements OnInit {
  constructor(private authService:AuthService) {}

  ngOnInit() {}

  // onSignin(signInForm:NgForm){
  //   const email = signInForm.value.email;
  //   const password = signInForm.value.password;
  //   this.authService.signinUser(email, password)
  // }

  onSignin(signInForm:NgForm){
    const email = signInForm.value.email;
    const password = signInForm.value.password;
    this.authService.signinUser(email, password);
  }
}
