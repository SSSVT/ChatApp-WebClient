import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ChatcomponentComponent} from '../chatcomponent/chatcomponent.component';
import {User} from '../../models/User';
import {Room} from '../../models/Room';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {ISubscription} from 'rxjs/Subscription';
import {Message} from '../../models/Message';
import set = Reflect.set;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent extends ChatcomponentComponent implements OnDestroy, OnInit {

  private intervalSubscription: ISubscription;
  private roomName: string;
  private roomOwnerID: number;
  private roomParticipants: any;
  private messages: Message[];
  private friendshipsToInvite: any;
  private isInviteShown: boolean;
  @Input() currentUser: User;
  private _currentRoomID: number;
  @Input() set currentRoomID(value: number){
    if (value){
      this._currentRoomID  = value;
      this.loadRoomNameAndOwner(value);
      this.loadRoomMessages(value);
    }
  }
  get currentRoomID(){
    return this._currentRoomID;
  }


  ngOnInit() {
    this.intervalSubscription = IntervalObservable.create(5000).subscribe(() => {
      if(this.currentRoomID){
        this.loadRoomMessages(this.currentRoomID);
      }
    });
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

  trackMessage(index, message){
    return message ? message.id : undefined;
  }

  loadRoomMessages(roomID){
    this.chatService.getRoomMessages(roomID)
      .subscribe((response: Message[]) => {
        this.messages = response;
      });
  }

  loadRoomNameAndOwner(roomID){
    this.chatService.getRoom(roomID)
      .subscribe((response: Room) => {
        this.roomName = response.name;
        this.roomOwnerID = response.idOwner;
      });
  }

  onEnter(input){
    if(this._currentRoomID !== null && input.value !== ''){
      this.sendMessage(input);
      input.value='';
    }
  }

  sendMessage(input) {
    if(input.value !== ''){
      this.chatService.sendMessage(this.currentRoomID, this.currentUser.id, input.value)
        .subscribe((response) => {
        });

      input.value = '';
    }
  }

  inviteFriendToRoom(input, userID) {
    input.disabled = true;
    input.value = 'Invited';
    this.chatService.createNewParticipant(this.currentRoomID, userID).subscribe();
  }

  showUsersForInvitation(){
    if(this.isInviteShown) {
      this.isInviteShown = false;
    }else{
      this.userService.getFriends(this.currentUser.id).subscribe(
        (response) => {
          this.friendshipsToInvite = response;
        });
        this.isInviteShown = true;
    }
  }
}
