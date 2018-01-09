import { Component, OnInit } from '@angular/core';
import {ChatcomponentComponent} from '../chatcomponent/chatcomponent.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent extends ChatcomponentComponent implements OnInit {

  ngOnInit() {
  }

}
