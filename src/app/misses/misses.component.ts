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
    this.httpMissesService.getMisses().subscribe(data => {
      this.initialMisses = data;
      this.misses = this.initialMisses;
    });
    this.httpMissesService.getWorkedMisses().subscribe(data => this.workedMisses = data);
  }
}
