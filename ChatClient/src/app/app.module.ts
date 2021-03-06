import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationGuard } from './guards/authentication.guard';
import { RedirectGuard } from './guards/redirect.guard';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import {ApiService} from './services/api.service';
import {ChatroomService} from './services/chatroom.service';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './authentication-interface/login-form/login-form.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { RegisterFormComponent } from './authentication-interface/register-form/register-form.component';
import { FriendsComponent } from './chat-interface/friends/friends.component';
import { HeaderComponent } from './chat-interface/header/header.component';
import { MessagesComponent } from './chat-interface/messages/messages.component';
import { RoomsComponent } from './chat-interface/rooms/rooms.component';
import { PasswordresetFormComponent } from './authentication-interface/passwordreset-form/passwordreset-form.component';
import { ChatcomponentComponent } from './chat-interface/chatcomponent/chatcomponent.component';



const appRoutes: Routes = [
  {
    path: '',
    component: ChatInterfaceComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'reset',
    component: PasswordresetFormComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'chat',
    component: ChatInterfaceComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    canActivate: [RedirectGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ChatInterfaceComponent,
    RegisterFormComponent,
    FriendsComponent,
    HeaderComponent,
    MessagesComponent,
    RoomsComponent,
    PasswordresetFormComponent,
    ChatcomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    ApiService,
    ChatroomService,

    AuthenticationGuard,
    RedirectGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
