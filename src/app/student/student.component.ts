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
    this.student = {
        'id': 3739,
        'faculty': {
          'id': 1,
          'name': 'Заочный факультет',
          'shortName': 'ЗФс'
        },
        'personalNumber': '14504',
        'group': 'Штс-59',
        'surname': 'Мелещенко',
        'name': 'Алёна',
        'patronymic': 'Сергеевна',
        'email': 'libartovichkostya@gmail.com',
        'birthDay': '1992-12-27',
        'phone': 'мтс 6809134',
        'address': '2014',
        'addressIndex': '247802',
        'region': 'Гомельская',
        'district': 'Наровлянский',
        'city': 'д.Конотоп',
        'street': 'Корзуна А.Г.',
        'houseNumber': '23',
        'corps': '',
        'apartment': ''
      };

    this.httpStudentService.getStudent().subscribe(data => this.student = data);
  }
}

