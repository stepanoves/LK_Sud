import {Component, OnInit} from '@angular/core';
import {HttpMissesService} from './misses.service';

@Component({
  selector: 'misses',
  templateUrl: './misses.component.html',
  providers: [HttpMissesService]
})

export class MissesComponent implements OnInit {
  misses: any;
  query: any;
  workedMisses: any;
  initialMisses: any;

  constructor(private httpMissesService: HttpMissesService) {

  }

  change(e) {
    this.query = e;
    this.misses = this.initialMisses.filter((miss) => miss.discipline.name.toLowerCase().includes(this.query.toLowerCase()));
  }

  ngOnInit() {
    this.initialMisses = [
      {
        'id': 12401,
        'discipline': {
          'id': 710,
          'name': 'Химия неорганическая и органическая'
        },
        'type': 'лабор.',
        'date': '2017-10-12',
        'clock': 2,
        'cause': 'прочая',
        'price': 4.58,
        'priceSum': 9.16,
        'paidPrice': 0,
        'teacher': {
          'id': 369,
          'surname': 'Сергеев',
          'name': 'Вячеслав',
          'patronymic': 'Юрьевич',
          'rank': 'ст. преподаватель'
        },
        'paymentDate': null,
        'giveDate': null,
        'isWorked': 'нет',
        'workedDate': null
      },
      {
        'id': 12401,
        'discipline': {
          'id': 710,
          'name': 'Физика'
        },
        'type': 'лабор.',
        'date': '2017-10-12',
        'clock': 2,
        'cause': 'прочая',
        'price': 4.58,
        'priceSum': 9.16,
        'paidPrice': 0,
        'teacher': {
          'id': 369,
          'surname': 'Иванов',
          'name': 'Иван',
          'patronymic': 'Иванович',
          'rank': 'доцент'
        },
        'paymentDate': null,
        'giveDate': null,
        'isWorked': 'нет',
        'workedDate': null
      }
    ];

    this.misses = this.initialMisses;
    /*
    this.httpMissesService.getMisses().subscribe(data => this.misses = data);
    this.httpMissesService.getWorkedMisses().subscribe(data => this.workedMisses = data);
     */
  }
}
