import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('visible') visible: boolean;
  userName: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
       this.userName = user.displayName;
    });
  }

  logout(){
    console.log("logout");
    this.auth.logout();
  }
}
