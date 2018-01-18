import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';
import { LoginRequestResponse } from '../models/LoginRequestResponse';

@Injectable()
export class AuthenticationService extends ApiService {

  get currentUser(){
    const token = localStorage.getItem('token');
    if (!token)
      return null;

    const decoded = new JwtHelper().decodeToken(token);
    return decoded;
  }

  loginUser(credentials) {

    return this.http.post(this.apiURL + '/Token/LoginAsync/', credentials)
      .map((result: LoginRequestResponse) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  registerUser(user) {
    return this.http.post(this.apiURL + '/registration/Register/', user);
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

