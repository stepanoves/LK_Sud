import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}
  title = 'app';
  token = JSON.parse(localStorage.getItem('token'));

  ngOnInit() {

  }

  logOut() {
    localStorage.removeItem('token');
    location.replace('/');
  }

}
