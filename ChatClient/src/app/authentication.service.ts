import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class AuthenticationService {
  apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = 'http://localhost:53513/api/v1/';
  }

  login(credentials) {
    const newUrl = this.apiUrl + 'Token/LoginAsync/';
    const body = {
      username: credentials.username,
      password: credentials.password
    };

    let responseData;

    this.http.post(newUrl, body)
      .subscribe(response => { responseData = response.json(); });


}



}
