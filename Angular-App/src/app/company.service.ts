import { Injectable } from '@angular/core';

import { MessageService } from './message.service'

import { Company } from './company'
import { companies } from '../assets/data'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private messageService: MessageService) { }

  setFetchMsg(){
    this.messageService.add("Company Service: 'Fetched Companies!");
  }

  setFilterMessage(categoryName){
    this.messageService.add(`Company Service: 'Filtered by ${categoryName} Companies!`);
  }

  getCompany(id: number): Observable<Company> {
    // TODO: send the message _after_ fetching the company
    this.messageService.add(`CompanyService: fetched Company id=${id}`);
    return of( companies.find(company => company.id === id));
  }


}
