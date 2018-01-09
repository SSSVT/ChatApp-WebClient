import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {ApiService} from './api.service';

@Injectable()
export class UserService extends ApiService {

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

}
