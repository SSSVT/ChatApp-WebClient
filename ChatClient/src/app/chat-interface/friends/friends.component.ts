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


  friends: any[];

  ngOnInit() {
    this.setFriends();
  }

  setFriends() {
    this.userService.getAllUsers().subscribe(
      response => {
       this.friends = response.json();
      });
  }

  findFriend(username: string){

  }

}
