import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ApiService} from './api.service';

@Injectable()
export class AuthenticationService extends ApiService {

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token)
      return null;

    let decoded = new JwtHelper().decodeToken(token);
    return decoded;
  }

  loginUser(credentials) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.apiURL + '/Token/LoginAsync/', JSON.stringify(credentials), options)
      .map(response => {
        let result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.apiURL + '/registration/Register/', JSON.stringify(user), options);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return tokenNotExpired();

    /*
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if (!token)
      return false;

    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
    */
  }

}

