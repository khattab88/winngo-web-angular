import { Brand } from './../models/brand';
import { BrandService } from './../data/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
    list: Brand[] = new Array<Brand>();

    constructor(private brandSvc: BrandService) { }

    ngOnInit() {
        this.brandSvc.getAll()
            .subscribe(brands => {
                this.list = brands;
            });
    }

}
