import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpMissesService {

  constructor(private http: HttpClient) {
  }

  public token = JSON.parse(localStorage.getItem('token'));

  addHeaders() {
    const myHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Content-Type', 'application/json');
    return myHeaders;
  }

  getMisses() {
    return this.http.get('http://86.57.182.101:8006/student/misses', {
      headers: this.addHeaders(),
      withCredentials: true
    });
  }

  getWorkedMisses() {
    return this.http.get('http://86.57.182.101:8006/student/misses/worked', {
      headers: this.addHeaders(),
      withCredentials: true
    });
  }
}
