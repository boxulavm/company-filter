import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  companies: Company[];
  copyCompanies: Company[];
  uniqueValues;
  loading:boolean = false;

  constructor(private companyService: CompanyService) { }

  getCompanies():void {
    this.companies = this.companyService.getCompanies();
  }

  getCopyCompanies(){
    return this.copyCompanies = [...this.companies];
  }

  getUniqueValues(){
    this.uniqueValues = [...new Set(this.companies.map(company => company.category))] ;
  }

  getFilterCompanies(category) {
    this.loading = true;
    this.companies = this.copyCompanies.filter(company => company.category === category);
    setTimeout(() => {
      this.loading = false;
      this.companyService.setFilterMessage(category);
    }, 500);
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getCompanies();
      this.getCopyCompanies();
      this.getUniqueValues();
      this.loading =  false;
    }, 500);
  }


}
