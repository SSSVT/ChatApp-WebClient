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
      .map((response) => response.json());
  }


  getFriends(userId: number) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    this.http.get( this.apiURL + '/Friendships/GetAcceptedByUserIDAsync/' + userId, options)
      .subscribe(response => {
        return response;
      });
  }

  findFriend(username: string ) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    this.http.get( this.apiURL + '/api/v1/users/FindByUsername/' + username, options)
      .subscribe(response => {
        return response;
      });
  }

}
