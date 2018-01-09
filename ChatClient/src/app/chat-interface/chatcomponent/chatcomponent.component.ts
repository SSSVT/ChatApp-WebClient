import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.css']
})
export class ChatcomponentComponent implements OnInit {

  constructor(protected authService: AuthenticationService,
              protected userService: UserService
  ) { }

  ngOnInit() {
  }

}
