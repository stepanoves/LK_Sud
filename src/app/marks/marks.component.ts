import {Component, OnInit} from '@angular/core';
import {HttpService} from './marks.service';

@Component({
  selector: 'marks',
  templateUrl: './marks.component.html',
  providers: [HttpService],
})

export class MarksComponent implements OnInit {
  marks: any;
  query: any;
  semQuery: any;
  initialMarks: any;

  constructor(private httpService: HttpService) {

  }

  change(e) {
    this.query = e;
    this.marks = this.initialMarks.filter((mark) => mark.discipline.name.toLowerCase().includes(this.query.toLowerCase()));
  }

  semNumber(e) {
    this.semQuery = e;
    this.marks = this.initialMarks.filter((sem) => sem.semesterNumber.toString().includes(this.semQuery));
  }

  numLimit(e) {
    if (e.keyCode < 48 || e.keyCode > 58) {
      e.preventDefault();
    }
  }

  ngOnInit() {
    this.initialMarks = [
      {
        'id': 205157,
        'mark': 5,
        'discipline': {
          'id': 436,
          'name': 'Прикладная математика'
        },
        'semesterNumber': 2,
        'date': '2015-10-29'
      },
      {
        'id': 205187,
        'mark': 5,
        'discipline': {
          'id': 387,
          'name': 'Основы трудового права Республики Беларусь'
        },
        'semesterNumber': 3,
        'date': '2015-11-01'
      }
    ];
    this.marks = this.initialMarks;
    //this.httpService.getMarks().subscribe(data => {
    // this.initialMarks = data;
    // this.marks = this.initialMarks;
    // });
  }
}
