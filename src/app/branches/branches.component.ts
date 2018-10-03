import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  brandName: string;
  public branches = [
    {
        id: 1,
        name: "Branch 1",
        brand: "adidas",
        img: "adidas.png",
        address: "Street 1, Area 1",
        percentage: 10,
        cash: 45,
        liked: true
    },
    {
        id: 2,
        name: "Branch 2",
        brand: "burger king",
        img: "burger-king.png",
        address: "Street 2, Area 2",
        percentage: 20,
        cash: 100,
        liked: true
    },
    {
        id: 3,
        name: "Branch 3",
        brand: "smart gym",
        img: "smart-gym.png",
        address: "Street 3, Area 3",
        percentage: 15,
        cash: 80,
        liked: false
    },
    {
        id: 4,
        name: "Branch 4",
        brand: "starbucks",
        img: "starbucks.png",
        address: "Street 4, Area 4",
        percentage: 35,
        cash: 85,
        liked: true
    },
    {
        id: 5,
        name: "Branch 5",
        brand: "zara",
        img: "zara.png",
        address: "Street 5, Area 5",
        percentage: 115,
        cash: 600,
        liked: true
    },
    {
        id: 6,
        name: "Branch 6",
        brand: "adidas",
        img: "adidas.png",
        address: "Street 6, Area 6",
        percentage: 10,
        cash: 45,
        liked: false
    },
    {
        id: 7,
        name: "Branch 7",
        brand: "burger king",
        img: "burger-king.png",
        address: "Street 7, Area 7",
        percentage: 20,
        cash: 100,
        liked: true
    },
    {
        id: 8,
        name: "Branch 8",
        brand: "burger king",
        img: "burger-king.png",
        address: "Street 8, Area 8",
        percentage: 20,
        cash: 100,
        liked: true
    },
];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.brandName = this.route.snapshot.params.brandname;
    this.branches = this.branches.filter((branch)=>{
        return branch.brand === this.brandName.toLowerCase();
    });
  }

}
