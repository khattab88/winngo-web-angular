import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  viewBrands(categoryId){
    this.categorySelected.emit(categoryId);
  }
}
