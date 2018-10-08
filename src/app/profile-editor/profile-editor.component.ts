import { Component, OnInit } from '@angular/core';
import { Gender } from '../enums/gender';
import { AuthService } from '../auth.service';
import { UserService } from '../data/user.service';

@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  name: string;
  mobile: string;
  email: string;
  birthDate: Date;
  gender: Gender;
  homeArea: string;
  workArea: string; 

  areas: string[] = ["Cairo", "Giza", "Alexandria"];

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
