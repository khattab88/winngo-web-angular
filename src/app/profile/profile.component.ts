import { Gender } from './../enums/gender';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  mobile: string;
  email: string;
  birthDate: Date;
  gender: Gender;
  homeArea: string;
  workArea: string; 

  constructor(private userSvc: UserService, private auth: AuthService) { }

  ngOnInit() {
   this.auth.user$.subscribe(u => {
     this.userSvc.get(u.uid).subscribe(user => {
       this.name = user.name;
       this.mobile = user.mobile;
       this.email = user.email;
       this.gender = user.gender;
       this.birthDate = user.birthDate;
       this.homeArea = user.homeArea;
       this.workArea = user.workArea;
     });
   });
  }

}
