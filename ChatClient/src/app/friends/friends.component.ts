import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
    this.friends = this.userService.getFriends();
  }

  ngOnInit() {
  }

  currentUser: any;
  friends: any;

}
