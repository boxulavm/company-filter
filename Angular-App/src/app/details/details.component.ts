import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CompanyService }  from '../company.service';
import { Company } from '../company'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  company:Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCompany();
  }
  
  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);;
  }

  goBack(): void {
    this.location.back();
  }

}
