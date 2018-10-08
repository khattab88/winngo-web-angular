import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeTab: string;
  selectedCategory: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeTab = "tab-categories";
    this.selectedCategory = 0;

    this.route.queryParams.subscribe(params => {
      this.activeTab = `tab-${params["activetab"]}`;
    });
  }

  onCategorySelected(categoryId: number){
    console.log("active category " + categoryId);
    this.selectedCategory = categoryId;
    this.activeTab = "tab-brands";
  }
}
