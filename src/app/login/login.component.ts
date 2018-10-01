import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  loginGoogle(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
