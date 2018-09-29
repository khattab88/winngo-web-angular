import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  public branches = [
    {
        id: 1,
        name: "Branch 1",
        brand: "adidas",
        address: "Street 1, Area 1",
        percentage: 10,
        cash: 45,
        liked: true
    },
    {
        id: 2,
        name: "Branch 2",
        brand: "burger king",
        address: "Street 2, Area 2",
        percentage: 20,
        cash: 100,
        liked: true
    },
    {
        id: 3,
        name: "Branch 3",
        brand: "smart gym",
        address: "Street 3, Area 3",
        percentage: 15,
        cash: 80,
        liked: false
    },
    {
        id: 4,
        name: "Branch 4",
        brand: "starbucks",
        address: "Street 4, Area 4",
        percentage: 35,
        cash: 85,
        liked: true
    },
    {
        id: 5,
        name: "Branch 5",
        brand: "zara",
        address: "Street 5, Area 5",
        percentage: 115,
        cash: 600,
        liked: true
    },
    {
        id: 6,
        name: "Branch 6",
        brand: "adidas",
        address: "Street 6, Area 6",
        percentage: 10,
        cash: 45,
        liked: false
    },
    {
        id: 7,
        name: "Branch 7",
        brand: "burger king",
        address: "Street 7, Area 7",
        percentage: 20,
        cash: 100,
        liked: true
    },
    {
        id: 8,
        name: "Branch 8",
        brand: "burger king",
        address: "Street 8, Area 8",
        percentage: 20,
        cash: 100,
        liked: true
    },
];

  constructor() { }

  ngOnInit() {
  }

}
