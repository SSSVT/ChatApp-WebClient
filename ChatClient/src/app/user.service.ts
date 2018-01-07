import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router) {
    this.apiURL = 'http://localhost:56120/api/v1'; //PC
    //this.apiURL = 'http://localhost:50212/api/v1';  // NTB
  }
  apiURL;

  getAllUsers() {
    return this.http.get(this.apiURL + '/users/FindAll')
      .subscribe(response => {
        console.log(response);
      });
  }
}
