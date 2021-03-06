import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpDebtsService {

  constructor(private http: HttpClient) {
  }

  public token = JSON.parse(localStorage.getItem('token'));

  addHeaders() {
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Content-Type', 'application/json');
    return myHeaders;
  }

  getDebts() {
    return this.http.get('http://localhost:8080/student/debts', {
      headers: this.addHeaders(),
      withCredentials: true
    });
  }
}
