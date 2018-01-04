import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router) {
    //this.apiURL = 'http://localhost:56120/api/v1'; //PC
    this.apiURL = 'http://localhost:50212/api/v1';  // NTB
  }

  apiURL;

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token)
      return null;

    return new JwtHelper().decodeToken(token);;
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

