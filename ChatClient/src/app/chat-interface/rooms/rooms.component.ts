import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ChatcomponentComponent} from '../chatcomponent/chatcomponent.component';
import {User} from '../../models/User';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent extends ChatcomponentComponent implements OnDestroy, OnInit {

  private intervalSubscription: ISubscription;
  rooms: any;
  isRoomCreating: boolean;
  hasBeenRoomCreated: boolean;
  currentRoomID: string;
  @Output() roomChangedEvent = new EventEmitter<number>();
  @Input() currentUser;

  async ngOnInit() {
    await this.getRooms();
    this.intervalSubscription = IntervalObservable.create(1000).subscribe(() => {
      this.getRooms();
    });
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

  trackRoom(index, room){
    return room ? room.id : undefined;
  }

  async getRooms(){
    await this.userService.getCurrentUser().subscribe((response: User) => {
      this.chatService.getRooms(response.id)
        .subscribe((rooms) => {
          this.rooms = rooms;
        });
    });
  }

  createRoom(roomInfo){
    this.chatService.createRoom(this.currentUser.id, roomInfo.roomName, roomInfo.roomDescription)
      .subscribe((response) => {
        if (response) {
          this.hasBeenRoomCreated = true;
        }
      });
    this.isRoomCreating = false;
  }


  leaveRoom(){
    if(this.currentRoomID !== undefined ){
      console.log(this.currentRoomID)
      this.chatService.leaveRoom(this.currentRoomID).subscribe();

      this.currentRoomID = undefined;
    }
  }

  removeRoom(roomID){
    this.chatService.removeRoom(roomID).subscribe();
  }

  startRoomCreation(){
    this.isRoomCreating = true;
    this.hasBeenRoomCreated = false;
  }

  cancelRoomCreation(){
    this.isRoomCreating = false;
  }

  changeRoom(roomID){
    this.currentRoomID = roomID;
    this.roomChangedEvent.emit(roomID);
  }

}
