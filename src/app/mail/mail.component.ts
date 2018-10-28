import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  token = JSON.parse(localStorage.getItem('token'));

  constructor() { }

  ngOnInit() {
  }

}
