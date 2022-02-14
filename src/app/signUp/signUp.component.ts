import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ templateUrl: 'SignUp.component.html' })
export class SignUpComponent {
  constructor(private router: Router) { }
  signUp(uname:any,psw:any,cpsw:any) {
    if(psw != cpsw){
        alert("Password Mismatch...")
    } else {
        localStorage.setItem("email",uname);
        localStorage.setItem("password",psw);
        this.router.navigateByUrl('')
    }
  }
}