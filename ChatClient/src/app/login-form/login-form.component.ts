import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

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
