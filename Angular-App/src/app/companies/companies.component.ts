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

  async getCompanies() {

    try {

      const res = await fetch ('http://localhost:3000/companies')
      const data = await res.json();
      this.companies = [...data.companies]

      await this.companyService.setFetchMsg();
      await this.getCopyCompanies();   
      await this.getUniqueValues();
  
    } catch (error) {

      console.log(error)

    }

  }

  getCopyCompanies(){
      return this.copyCompanies = [...this.companies];
  }

  getUniqueValues(){
    return this.uniqueValues = [...new Set(this.companies.map(company => company.category))] ;
  }

  getFilterCompanies(category) {
    this.loading = true;
    this.companies = this.copyCompanies.filter(company => company.category === category);
    setTimeout(() => {
      this.loading = false;
      this.companyService.setFilterMessage(category);
    }, 300);
  }

  ngOnInit() {
    this.loading = true;

    setTimeout(() => {
      this.getCompanies();
      this.loading =  false;
    }, 500);
    
    
  }


}
