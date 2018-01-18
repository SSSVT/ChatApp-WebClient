import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {ApiService} from './api.service';
import 'rxjs/add/operator/map';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService extends ApiService {

  getCurrentUser() {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(this.apiURL + '/users/GetCurrentUserAsync', {headers: header});
  }

  getAllUsers() {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(this.apiURL + '/users/FindAll', {headers: header});
  }

  findUserByUsername(username: string ) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get( this.apiURL + '/Users/FindByUsernameAsync/' + username, {headers: header});
  }

  getUserByID(userID: number){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get( this.apiURL + '/users/detailAsync/' + userID, {headers: header});
  }

  getFriends(userId: number) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get( this.apiURL + '/Friendships/GetAcceptedByUserIDAsync/' + userId, {headers: header});
  }

  getFriendRequests(userID) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get( this.apiURL + '/Friendships/GetReceivedAndPendingByUserIDAsync/' + userID, {headers: header});
  }

  createNewFriendship(senderID, recipientID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const body = {IDSender: senderID, IDRecipient: recipientID};

    return this.http.post(this.apiURL + '/Friendships/PostFriendshipAsync/', body, {headers: header});
  }

  acceptFriendship(friendshipID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(this.apiURL + '/Friendships/AcceptFriendshipAsync/' + friendshipID.toUpperCase(), null, {headers: header});
  }

  declineFriendship(friendshipID){
    return this.deleteFriendship(friendshipID);
  }

  deleteFriendship(friendshipID) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.apiURL + '/Friendships/DeleteFriendshipAsync/' + friendshipID.toUpperCase(), {headers: header});
  }
}
