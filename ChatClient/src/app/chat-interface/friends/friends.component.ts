import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  currentUser: any;
  friends: any;


  ngOnInit() {
    this.userService.getCurrentUser().map((response) =>  {
      this.currentUser = response;
    });
    console.log(this.currentUser);
  }

  setFriends() {
    this.friends = this.userService.getFriends(this.currentUser.id);
  }

  findFriend(username: string){

  }

}
