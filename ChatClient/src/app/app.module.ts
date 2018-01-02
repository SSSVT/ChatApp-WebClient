import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'chat',
    component: ChatInterfaceComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ChatInterfaceComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
