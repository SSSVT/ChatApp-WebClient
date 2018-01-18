import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {

  currentRoomID: number;
  currentUser: User;

  constructor(private authService: AuthenticationService, private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      (response: User) => {
        this.currentUser = response;
      });
  }

  receiveChangedRoom($event){
    this.currentRoomID = $event;
  }

}
