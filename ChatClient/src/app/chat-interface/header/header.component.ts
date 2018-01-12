import { Component, OnInit } from '@angular/core';
import { ChatcomponentComponent } from '../chatcomponent/chatcomponent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends ChatcomponentComponent implements OnInit {

  private friendRequests: any[];
  private amountOfRequests: number;
  private currentUser: any;

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    this.userService.getCurrentUser().subscribe(
      (response) => {
          this.currentUser = response.json();
        });
  }

  setFriendRequests(){
    this.userService.getFriendRequests(this.currentUser.id)
      .subscribe(
      response => {
        this.friendRequests = response.json();
      }
    );

    this.amountOfRequests = this.friendRequests.length;
  }

}
