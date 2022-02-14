// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private router: Router) { }
  signUp() {
    this.router.navigateByUrl('signUp')
    // this.appRoutingModule.navigate([`${pageName}`]);
    //just added console.log which will display the event details in browser on click of the button.
    // alert("Button is clicked");
    // console.log(event);
 }
}
