  //import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './service/account-service.service';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavbarComponent } from './pages/front-page/navbar/navbar.component';
import { BannerComponent } from './pages/front-page/banner/banner.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FrontPageComponent,
    NavbarComponent,
    BannerComponent,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule, 
    HttpClientModule,
    Routing,
    MatTableModule,
    NgModule,

  ],
  providers: [AccountService],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
