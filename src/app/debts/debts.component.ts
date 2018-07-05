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
  initialDebts: any;
  isSorted: any;

  constructor(private httpService: HttpDebtsService) {

  }

  change(e) {
    this.query = e;
    this.debts = this.initialDebts.filter((debt) => debt.discipline.name.toLowerCase().includes(this.query.toLowerCase()));
  }

  compare(a, b) {
    if (a.semester < b.semester) {
      return -1;
    } else
    if (a.semester > b.semester) {
      return 1;
    } else {
      return 0;
    }
  }

  sortSem() {
    if (!this.isSorted) {
      this.debts = this.debts.sort(this.compare);
      this.isSorted = true;
    } else if (this.isSorted) {
      this.debts = this.debts.reverse();
      this.isSorted = false;
    }
  }


  ngOnInit() {
    this.isSorted = false;
    this.httpService.getDebts().subscribe(data => {
      this.initialDebts = data;
      this.debts = this.initialDebts;
    });
  }
}
