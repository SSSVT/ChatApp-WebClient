import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {UserService} from './user.service';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ChatroomService extends ApiService{

  constructor(
    protected http: HttpClient,
    protected router: Router,
    private authService: AuthenticationService,
    private userService: UserService){
    super(http, router);
  }

  sendMessage(roomId: number, userId: number, message: string){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const timeStamp = new Date().toUTCString();
    const body = {
      IDRoom: roomId,
      IDUser: userId,
      UTCSend: timeStamp,
      Content: message
    };

    return this.http.post( this.apiURL + '/Messages/CreateAsync/', body, {headers: header});
  }

  getRooms(userID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get( this.apiURL + '/Rooms/FindByUserIDAsync/' + userID, {headers: header});
  }

  getRoom(roomID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get( this.apiURL + '/Rooms/FindAsync/' + roomID, {headers: header});
  }

  getRoomMessages(roomId: number) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    header.append('Content-Type','application/json');
    const timeStamp = new Date(2000);

    return this.http.post( this.apiURL + '/Messages/GetByRoomIDAsync/' + roomId, timeStamp, {headers: header});
  }

  createRoom(ownerID, roomName, roomDescription){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const body = {
      idOwner: ownerID,
      name: roomName,
      description: roomDescription
    };

    return this.http.post( this.apiURL + '/Rooms/CreateAsync/', body, {headers: header});
  }

  getRoomParticipants(roomID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    header.append('Content-Type','application/json');

    return this.http.get( this.apiURL + '/Participants/GetByRoomIDAsync/' + roomID, {headers: header});
  }

  createNewParticipant(roomID, userID){
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    header.append('Content-Type','application/json');
    const body = {
      idRoom: roomID,
      idUser: userID
    }

    return this.http.post( this.apiURL + '/Participants/PostParticipantAsync/', body, {headers: header});
  }

  leaveRoom(){

  }
}
