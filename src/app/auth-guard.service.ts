import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(){
    // return this.auth.user$.map(user =>{
    //   if(user) return true;

    //   this.router.navigate(["/login"]);
    //   return false;
    // });

    return this.auth.user$.pipe(map (
      user => {
     if ( user ) return true;

     this.router.navigate(['/login']);
     return false;
   }
   ));
  }
}
