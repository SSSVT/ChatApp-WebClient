import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationGuard } from './guards/authentication.guard';
import { RedirectGuard } from './guards/redirect.guard';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './authentication-interface/login-form/login-form.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FriendsComponent } from './chat-interface/friends/friends.component';
import { HeaderComponent } from './chat-interface/header/header.component';
import { MessagesComponent } from './chat-interface/messages/messages.component';
import { RoomsComponent } from './chat-interface/rooms/rooms.component';
import { PasswordresetFormComponent } from './passwordreset-form/passwordreset-form.component';
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
    HttpModule
  ],
  providers: [
    AuthenticationService,
    UserService,

    AuthenticationGuard,
    RedirectGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
