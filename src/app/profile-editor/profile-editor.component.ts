import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import { Gender } from '../enums/gender';
import { AuthService } from '../auth.service';
import { UserService } from '../data/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  id: string;
  name: string;
  email: string;
  mobile: string;
  birthDate: Date;
  gender: Gender;
  homeArea: string;
  workArea: string; 

  areas: string[] = ["Cairo", "Giza", "Alexandria"];

  constructor(private userSvc: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.user$.subscribe(u => {
      this.userSvc.get(u.uid).subscribe(user => {
        this.id = user.id;
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

  save(user: AppUser){
    user.id = this.id;
    user.name = this.name;
    user.email = this.email;
    this.userSvc.saveUser(user);
    this.router.navigate(["/profile"]);
  }
}
