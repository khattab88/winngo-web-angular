import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {}

  save(user: firebase.User){
    this.db.object("/users/" + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }

  saveUser(user: AppUser){
    this.db.object("/users/" + user.id).update(user);
  }

  get(uid: string): FirebaseObjectObservable<AppUser>{
    return this.db.object("/users/" + uid);
  }

}
