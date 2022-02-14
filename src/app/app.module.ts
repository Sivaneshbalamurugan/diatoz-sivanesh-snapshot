import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home';
import { SignUpComponent } from './SignUp';
import { LoginComponent } from './login';
import { appRoutingModule } from './app.routing';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent
],
  imports: [
    BrowserModule,appRoutingModule,HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
