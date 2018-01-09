import { Component, OnInit } from '@angular/core';
import { ChatcomponentComponent } from '../chatcomponent/chatcomponent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends ChatcomponentComponent implements OnInit {

  ngOnInit() {
  }
}
