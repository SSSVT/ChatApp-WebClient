import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationGuard } from './authentication.guard';
import { RedirectGuard } from './guards/redirect.guard';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { RoomsComponent } from './rooms/rooms.component';


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
    RoomsComponent
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
