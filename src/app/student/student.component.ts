import {Component, OnInit} from '@angular/core';
import {HttpStudentService} from './student.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  providers: [HttpStudentService]
})

export class StudentComponent implements OnInit {
  student: any;

  constructor(private httpStudentService: HttpStudentService) {

  }

  ngOnInit() {
    this.httpStudentService.getStudent().subscribe(data => this.student = data);
  }
}

