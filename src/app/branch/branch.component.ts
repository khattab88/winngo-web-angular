import 'rxjs/add/operator/map';
import { Branch } from './../models/branch';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BranchService } from '../data/branch.service';
import { BrandService } from '../data/brand.service';
import { Brand } from '../models/brand';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  brandName: string;
  branchName: string;
  brand: Brand;
  branch: Branch;
  brand$;
  branch$;

  constructor(private route: ActivatedRoute, private branchSvc: BranchService, private brandSvc: BrandService) { }

  ngOnInit() {
    this.brandName = this.route.snapshot.params.brandname;
    this.branchName = this.route.snapshot.params.branchname;
   
    this.brand$ = this.brandSvc.getByName(this.brandName);
    this.brand$.subscribe(brands => {
      this.brand = brands[0];

      this.branch$ = this.branchSvc.getByName(this.branchName);
      this.branch$.subscribe(branches => {
        this.branch = branches[0];
        //console.log(this.branch);
      });
    });
  }

}
