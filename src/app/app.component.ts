import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private http: HttpClient) {}

  title = 'app';
  token = JSON.parse(localStorage.getItem('token'));

  logOut() {
    localStorage.removeItem('token');
    location.replace('/');
  }
}
