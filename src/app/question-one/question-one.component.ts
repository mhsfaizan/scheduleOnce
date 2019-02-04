import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {

  constructor() { }
  data:string;
  ngOnInit() {
    this.data = this.getData();
  }
  getData():string {
    var p = '';
    for (var i = 1; i <= 100; i++) {
      if (i % 4 == 0 && i % 7 != 0) {
        p += 'Marco, ';
      } else if (i % 7 == 0 && i % 4 != 0) {
        p += 'Polo, ';
      } else if (i % 7 == 0 && i % 4 == 0) {
        p += 'Marcopolo, ';
      } else {
        p += i + ', ';
      }
    }
    return p;
  }

}
