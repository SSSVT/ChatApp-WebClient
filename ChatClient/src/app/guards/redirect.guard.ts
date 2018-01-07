import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from '../authentication.service';

@Injectable()
export class RedirectGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
