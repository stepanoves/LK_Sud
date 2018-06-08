import {Component, OnInit} from '@angular/core';
import {HttpDebtsService} from './debts.service';

@Component({
  selector: 'debts',
  templateUrl: './debts.component.html',
  providers: [HttpDebtsService],
})

export class DebtsComponent implements OnInit {
  debts: any;
  query: any;
  semQuery: any;
  initialDebts: any;

  constructor(private httpService: HttpDebtsService) {

  }

  change(e) {
    this.query = e;
    this.debts = this.initialDebts.filter((debt) => debt.discipline.name.toLowerCase().includes(this.query.toLowerCase()));
  }

  semNumber(e) {
    this.semQuery = e;
    this.debts = this.initialDebts.filter((sem) => sem.semester.toString().includes(this.semQuery));
  }

  numLimit(e) {
    if (e.keyCode < 48 || e.keyCode > 58) {
      e.preventDefault();
    }
  }

  ngOnInit() {
    this.initialDebts = [
      {
        'semester': 1,
        'examType': {
          'id': 1,
          'name': 'Зачет',
          'kind': 'зачет'
        },
        'discipline': {
          'id': 679,
          'name': 'Физика'
        },
        'mark': 'зачет',
        'date': '2014-10-28',
        'teacher': {
          'id': 478,
          'surname': 'Шилин',
          'name': 'Александр',
          'patronymic': 'Дмитриевич',
          'rank': 'Доцент'
        }
      },
      {
        'semester': 2,
        'examType': {
          'id': 2,
          'name': 'Экзамен',
          'kind': 'экзамен'
        },
        'discipline': {
          'id': 67,
          'name': 'Высшая математика'
        },
        'mark': '4',
        'date': '2014-10-29',
        'teacher': {
          'id': 124,
          'surname': 'Дунина',
          'name': 'Елена ',
          'patronymic': 'Брониславовна',
          'rank': 'Доцент'
        }
      }
    ];

    this.debts = this.initialDebts;
    //this.httpService.getDebts().subscribe(data => this.debts = data);
  }
}
