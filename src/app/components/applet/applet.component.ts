import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/person';


@Component({
  selector: 'app-applet',
  templateUrl: './applet.component.html',
  styleUrls: ['./applet.component.css']
})
export class AppletComponent implements OnInit {



  @Input() person: Person;
  ratingY: string = "";
  ratingN: string = "";

  constructor() { }

  ngOnInit(): void {
    if (this.person.rating || this.person.rating == 0) {
      let tempRating: number = this.person.rating;
      for (let i = 0; i < 5; i++) {
        if (tempRating > 0) {
          this.ratingY = this.ratingY + "★";
          tempRating--;
        }
        else {
          this.ratingN = this.ratingN + "☆";
        }

      }
    }
  }

}
