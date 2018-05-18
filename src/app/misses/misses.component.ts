import {Component, OnInit} from "@angular/core";
import {HttpMissesService} from "./misses.service";

@Component({
  selector: 'misses',
  templateUrl: './misses.component.html',
  providers: [HttpMissesService]
})

export class MissesComponent implements OnInit {
  misses: any;
  workedMisses: any;

  constructor(private httpMissesService: HttpMissesService) {

  }

  ngOnInit() {
    this.httpMissesService.getMisses().subscribe(data => this.misses = data);
    this.httpMissesService.getWorkedMisses().subscribe(data => this.workedMisses = data);
  }
}
