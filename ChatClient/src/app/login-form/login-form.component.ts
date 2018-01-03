import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private authenticator: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(credentials) {


    if (credentials.username === 'admin' && credentials.password === 'admin')
    {
      this.router.navigate(['chat']);
    }
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }

}
