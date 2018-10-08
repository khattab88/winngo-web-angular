import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpened: boolean;

  constructor() { }

  ngOnInit() {
    this.menuOpened = false;
  }

  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

}
