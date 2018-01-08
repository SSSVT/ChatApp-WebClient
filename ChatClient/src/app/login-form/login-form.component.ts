import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(credentials) {
    this.authService.loginUser(credentials)
      .subscribe(result => {
        if (result) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([ returnUrl || '/']);
        } else {
          this.invalidLogin = true;
        }
      }, err => {
        if (err)
          this.invalidLogin = true;
      });
  }
}
