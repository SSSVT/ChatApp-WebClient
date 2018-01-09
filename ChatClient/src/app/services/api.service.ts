import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {

  constructor(protected http: Http, protected router: Router) {
    //this.apiURL = 'http://localhost:56120/api/v1'; //PC
    this.apiURL = 'http://localhost:50212/api/v1';  // NTB
  }
  apiURL;
}
