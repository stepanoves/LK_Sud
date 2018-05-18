import {Component, OnInit} from "@angular/core";
import {HttpService} from "./marks.service";

@Component({
  selector: 'marks',
  templateUrl: './marks.component.html',
  providers: [HttpService],
})

export class MarksComponent implements OnInit {
  marks: any;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.httpService.getMarks().subscribe(data => this.marks = data);
  }
}
