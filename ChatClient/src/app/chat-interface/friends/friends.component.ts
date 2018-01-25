import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from '../../models/User';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {ISubscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnDestroy, OnInit {

  private intervalSubscription: ISubscription;
  acceptedFriendships: any;
  currentUser: any;
  hasFriendRequestSent: boolean;
  hasFriendRequestError: boolean;


  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    await this.userService.getCurrentUser()
    .subscribe(
      (response) => {
        this.currentUser = response;
        this.setFriends(this.currentUser.id);
      }
    );


    this.intervalSubscription = IntervalObservable.create(1000).subscribe(() => {
    this.userService.getCurrentUser()
      .subscribe(
        (response) => {
          this.currentUser = response;
          this.setFriends(this.currentUser.id);
        }
      );
    });
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

  resetInfoAlert(){
    this.hasFriendRequestSent = false;
    this.hasFriendRequestError = false;
  }

  trackFriend(index, friendship){
    return friendship ? friendship.id : undefined;
  }

  setFriends(userID) {
    this.userService.getFriends(userID).subscribe(
      (response) => {
        this.acceptedFriendships = response;
      });
  }

  addFriend(input) {
    if(input.value !== ''){
      this.userService.findUserByUsername(input.value)
        .subscribe(
          (friend: User) => {
            this.userService.createNewFriendship(this.currentUser.id, friend.id).subscribe(
              (response) => {
                if (response) {
                  this.hasFriendRequestSent = true;
                  input.value = '';
                }
              }
            );
          });
    }
    setTimeout(() => { this.setFriends(this.currentUser.id) },1000);
  }

  removeFriendship(friendship){
    const index = this.acceptedFriendships.indexOf(friendship);
    if (index !== -1){
      this.acceptedFriendships.splice(index, 1);
      this.userService.deleteFriendship(friendship.id).subscribe();
    }
  }

}
