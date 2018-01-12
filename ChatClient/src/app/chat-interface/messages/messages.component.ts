import { Component, OnInit } from '@angular/core';
import {ChatcomponentComponent} from '../chatcomponent/chatcomponent.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent extends ChatcomponentComponent implements OnInit {

  messages: any;

  ngOnInit() {
  }

}
