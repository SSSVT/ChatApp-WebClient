import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  registerUser(user) {
    this.authService.registerUser(user)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);

        } else {

        }
      });
  }
}
