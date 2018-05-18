import {Component, OnInit} from "@angular/core";
import {HttpDebtsService} from "./debts.service";

@Component({
  selector: 'debts',
  templateUrl: './debts.component.html',
  providers: [HttpDebtsService],
})

export class DebtsComponent implements OnInit {
  debts: any;

  constructor(private httpService: HttpDebtsService) {

  }

  ngOnInit() {
    this.httpService.getDebts().subscribe(data => this.debts = data);
  }
}
