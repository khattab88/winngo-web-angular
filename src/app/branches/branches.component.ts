import { BrandService } from './../data/brand.service';
import { Branch } from './../models/branch';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../data/branch.service';
import { Brand } from '../models/brand';
import 'rxjs/add/operator/first';

@Component({
    selector: 'branches',
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

    brandName: string;
    brandObj: Brand;
    list: Branch[] = new Array<Branch>();

    constructor(private route: ActivatedRoute, private branchSvc: BranchService, private brandSvc: BrandService) { }

    ngOnInit() {
        this.brandName = this.route.snapshot.params.brandname;

        this.brandSvc.getByName(this.brandName).subscribe(brands => {
            this.brandObj = brands[0];

            this.branchSvc.getByBrand(this.brandObj.id)
            .subscribe(branches => {
                this.list = branches;
            });
        });
    }
}
