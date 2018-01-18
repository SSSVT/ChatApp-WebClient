import {Component, OnDestroy, OnInit} from '@angular/core'; import { ChatcomponentComponent } from '../chatcomponent/chatcomponent.component';
import {User} from '../../models/User';
import {ISubscription} from 'rxjs/Subscription';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends ChatcomponentComponent implements OnDestroy, OnInit {

  private intervalSubscription: ISubscription;
  friendRequests: any;
  amountOfRequests: number;
  currentUser: User;
  showRequests = false;

  async ngOnInit() {
    await this.setCurrentUserAndRequests();

    this.intervalSubscription = IntervalObservable.create(5000).subscribe(() => {
      this.setFriendRequests(this.currentUser.id);
    });
  }

  trackFriendRequests(index, request){
    return request ? request.id : undefined;
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

  refreshRequestAmount(){
    this.amountOfRequests = this.friendRequests.length;
  }

  setCurrentUserAndRequests() {
    this.userService.getCurrentUser().subscribe(
      (response: User) => {
          this.currentUser = response;
          this.setFriendRequests(this.currentUser.id);
        });
  }

  setFriendRequests(userID) {
    this.userService.getFriendRequests(userID)
      .subscribe(
        (response) => {
          this.friendRequests = response;
          this.amountOfRequests = this.friendRequests.length;
      }
    );
  }

  showFriendRequests(){
    this.showRequests = !this.showRequests;
  }

  acceptFriendRequest(friendRequest){
    const index = this.friendRequests.indexOf(friendRequest);
    if (index !== -1){
      this.friendRequests.splice(index, 1);
      this.userService.acceptFriendship(friendRequest.id).subscribe();
      this.refreshRequestAmount();
      if (this.friendRequests.length === 0) {
        this.showRequests = false;
      }
    }
  }

  declineFriendRequest(friendRequest){
    const index = this.friendRequests.indexOf(friendRequest);
    if (index !== -1){
      this.friendRequests.splice(index, 1);
      this.userService.declineFriendship(friendRequest.id).subscribe();
      this.refreshRequestAmount();
      if (this.friendRequests.length === 0) {
        this.showRequests = false;
      }
    }
  }

}
