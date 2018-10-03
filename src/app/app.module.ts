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
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchComponent } from './branch/branch.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InterestsComponent,
    HomeComponent,
    BrandsComponent,
    HeaderComponent,
    CategoriesComponent,
    BranchesComponent,
    BranchComponent,
    BranchComponent,
    ProfileComponent,
    ProfileEditorComponent
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
      { path:"branches/:brandname", component: BranchesComponent },
      { path:"branch/:branchid", component: BranchComponent },
      { path:"profile", component: ProfileComponent, canActivate: [AuthGuard] },
      { path:"profile-editor", component: ProfileEditorComponent, canActivate: [AuthGuard] },
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
