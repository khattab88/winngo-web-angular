import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  private brands = [
    {
        id: 1,
        title: "Adidas",
        noOfBranches: 20,
        img: "adidas-black-vector-logo.png"
    },
    {
        id: 2,
        title: "Zara",
        noOfBranches: 15,
        img: "zara-logo.png"
    },
    {
        id: 3,
        title: "Burger King",
        noOfBranches: 10,
        img: "Burger_King_Logo.svg.png"
    },
    {
        id: 4,
        title: "Smart Gym",
        noOfBranches: 12,
        img: "gym-icon.png"
    },
    {
        id: 5,
        title: "StarBucks",
        noOfBranches: 16,
        img: "starbucks-logo-png-transparent-0.png"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
