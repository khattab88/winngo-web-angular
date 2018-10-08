import { Brand } from './../models/brand';
import { BrandService } from './../data/brand.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
    list: Brand[] = new Array<Brand>();
    @Input() selectedCategory: number;

    constructor(private brandSvc: BrandService) { }

    ngOnInit() {
        if(this.selectedCategory == 0){
            this.brandSvc.getAll()
            .subscribe(brands => this.list = brands);
        }else{
            this.brandSvc.getByCategory(this.selectedCategory)
             .subscribe(b => this.list = b);
        }
    }
}
