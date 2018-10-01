import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private auth:AuthService) {
  }

  loginGoogle(){
    this.auth.loginGoogle();
  }

  logout(){
    this.auth.logout();
  }
}
