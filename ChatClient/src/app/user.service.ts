import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUsers(){
    this.http.get('http://localhost:53513/api/v1/users/FindAll').subscribe(response => {response.json(); });
  }

}
