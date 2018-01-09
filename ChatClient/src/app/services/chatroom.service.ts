import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { Http, Headers, RequestOptions} from '@angular/http';
import {UserService} from './user.service';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class ChatroomService extends ApiService{

  constructor(
    private http: Http,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService){
    super(http, router);
  }

  getRooms(){

  }

  getRoomMessages(){

  }

  getFriends(){
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = new RequestOptions({headers: headers});

    let currentUserID =

    let friends = this.http.get( this.apiURL + '/Friendships/GetAcceptedByUserIDAsync/' + currentUserID, options)
  }

}
