import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InterestsComponent } from './interests/interests.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InterestsComponent,
    HomeComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:"", component: HomeComponent },
      { path:"login", component: LoginComponent },
      { path:"signup", component: SignupComponent },
      { path:"interests", component: InterestsComponent },
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
