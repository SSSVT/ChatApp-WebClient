import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router) {
    //this.apiURL = 'http://localhost:56120/api/v1'; //PC
    this.apiURL = 'http://localhost:50212/api/v1';  // NTB
  }
  apiURL;

  getAllUsers() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.apiURL + '/users/FindAll', options)
      .subscribe(response => {
        console.log(response);
      });
  }

  getCurrentUser() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.apiURL + '/users/GetCurrentUser', options)
      .subscribe(response => {
        console.log(response);
      });
  }

  getFriends(){
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    //let friends = this.http.get()
  }
}
