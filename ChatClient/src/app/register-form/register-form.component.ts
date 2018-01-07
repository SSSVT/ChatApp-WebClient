import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) {
    this.birthdateValid = true;
  }

  birthdateValid: boolean;

  ngOnInit() {
  }

  isBirthdateValid(date){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();
    let wrongYear = currentYear  - 13;


    let inputYear = date.substring(0,4);
    let inputMonth = date.substring(5,7);
    let inputDay = date.substring(8,10);

    this.birthdateValid = inputYear <= wrongYear;
    /*
    if(this.birthdateValid)
    {
      this.birthdateValid = inputMonth <= currentMonth && inputDay <= currentDay;
    }
    */


    return this.birthdateValid;
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
