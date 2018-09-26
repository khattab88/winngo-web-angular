import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  private interests = [
    { name: "Category 1", selcted: true },
    { name: "Category 2", selcted: false },
    { name: "Category 3", selcted: true },
    { name: "Category 4", selcted: false },
    { name: "Category 5", selcted: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
