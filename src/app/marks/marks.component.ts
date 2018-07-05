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
  initialMarks: any;
  isSorted: any;

  constructor(private httpService: HttpService) {

  }

  change(e) {
    this.query = e;
    this.marks = this.initialMarks.filter((mark) => mark.discipline.name.toLowerCase().includes(this.query.toLowerCase()));
  }

  compare(a, b) {
    if (a.semesterNumber < b.semesterNumber) {
      return -1;
    } else
    if (a.semesterNumber > b.semesterNumber) {
      return 1;
    } else {
      return 0;
    }
  }

  sortSem() {
    if (!this.isSorted) {
      this.marks = this.marks.sort(this.compare);
      this.isSorted = true;
    } else if (this.isSorted) {
      this.marks = this.marks.reverse();
      this.isSorted = false;
    }
  }

  ngOnInit() {
    this.httpService.getMarks().subscribe(data => {
       this.initialMarks = data;
       this.marks = this.initialMarks;
     });
  }
}
