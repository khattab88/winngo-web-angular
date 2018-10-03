import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  public brands = [
    {
        id: 1,
        title: "Adidas",
        noOfBranches: 20,
        img: "adidas.png"
    },
    {
        id: 2,
        title: "Zara",
        noOfBranches: 15,
        img: "zara.png"
    },
    {
        id: 3,
        title: "Burger King",
        noOfBranches: 10,
        img: "burger-king.png"
    },
    {
        id: 4,
        title: "Smart Gym",
        noOfBranches: 12,
        img: "gym-gym.png"
    },
    {
        id: 5,
        title: "StarBucks",
        noOfBranches: 16,
        img: "starbucks.png"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
