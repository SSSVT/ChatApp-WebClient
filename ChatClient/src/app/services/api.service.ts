import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {

  constructor(protected http: HttpClient, protected router: Router) {
    this.apiURL = 'http://192.168.10.52:56120/api/v1'; // PC
    // this.apiURL = 'http://localhost:56120/api/v1'; // PC
    //this.apiURL = 'http://localhost:50212/api/v1';  // NTB
  }
  apiURL;
}
