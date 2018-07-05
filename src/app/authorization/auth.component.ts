import {Component, OnInit} from '@angular/core';
import {Auth} from './auth';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  auth: Auth = new Auth();
  error: number;
  token: any;

  addHeaders() {
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa(this.auth.email + ':' + this.auth.password))
      .set('Content-Type', 'application/json');
    return myHeaders;
  }

  submit() {
    this.http.get('http://abitpriv.vstu.by:8080/api/uaa/api/token/generate', {headers: this.addHeaders(), withCredentials: true})
      .subscribe(
        (data) => {
          this.token = data['token'];
          localStorage.setItem('token', JSON.stringify(this.token));
          this.error = undefined;
          location.replace('/student');
        },
        error => { this.error = error; }
      );
  }

  ngOnInit() {

  }
}
