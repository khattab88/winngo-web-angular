import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './data/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private user: UserService, private auth: AuthService, private router: Router){

    this.auth.user$.subscribe(user => {
      if(user){
        this.user.save(user);

        let returnUrl = localStorage.getItem("returnUrl");
        //if(returnUrl) this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
