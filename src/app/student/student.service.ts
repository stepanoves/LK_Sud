import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpStudentService {

  constructor(private http: HttpClient) {
  }

  public token = JSON.parse(localStorage.getItem('token'));

  addHeaders() {
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Content-Type', 'application/json');
    return myHeaders;
  }

  getStudent() {
    return this.http.get('http://86.57.182.101:8006/student', {
      headers: this.addHeaders(),
      withCredentials: true
    });
  }
}
