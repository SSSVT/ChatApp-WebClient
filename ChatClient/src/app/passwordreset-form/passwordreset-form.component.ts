import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-passwordreset-form',
  templateUrl: './passwordreset-form.component.html',
  styleUrls: ['./passwordreset-form.component.css']
})
export class PasswordresetFormComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
