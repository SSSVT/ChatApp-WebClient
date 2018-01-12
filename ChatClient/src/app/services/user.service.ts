import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {ApiService} from './api.service';

@Injectable()
export class UserService extends ApiService {

  getAllUsers() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.apiURL + '/users/FindAll', options);
  }

  getCurrentUser() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.apiURL + '/users/GetCurrentUser', options);
  }


  getFriends(userId: number) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get( this.apiURL + '/Friendships/GetAcceptedByUserIDAsync/' + userId, options);
  }

  findFriend(username: string ) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get( this.apiURL + '/api/v1/users/FindByUsername/' + username, options);
  }


  getFriendRequests(userID){
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    return this.http.get( this.apiURL + '/api/v1/Friendships/GetReceivedAndPendingByUserID/' + userID, options);
  }
}
