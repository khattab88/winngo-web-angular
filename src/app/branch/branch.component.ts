import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  brandName: string;
  branchName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.brandName = this.route.snapshot.params.brandname;
    this.branchName = this.route.snapshot.params.branchname;
    
    //console.log(this.brandName + "/" + this.branchName);
  }

}
