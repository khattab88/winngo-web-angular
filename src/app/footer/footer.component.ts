import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../data/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string;
  points: number;

  constructor(private userSvc: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(u => {
      this.userSvc.get(u.uid).subscribe(user => {
        this.name = user.name;
        this.points = user.points;
      });
    });
  }

}
