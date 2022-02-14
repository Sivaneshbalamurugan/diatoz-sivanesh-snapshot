import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent {
  constructor(private router: Router) { }
  signup() {
    this.router.navigateByUrl('signUp')
  }
  login(uname:any,psw:any) {
      var email=localStorage.getItem("email");
      var password=localStorage.getItem("password");
      if(email == uname && password == psw)
        this.router.navigateByUrl('home')
      else
        alert("Invalid User name or Password")
  }
}