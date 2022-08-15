import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LUKAS } from 'src/app/lukas';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  thePerson: any;
  ratingY: string = "";
  ratingN: string = "";

  constructor(private _route: ActivatedRoute, private router: Router) { }

  buyNowClick(id: number): void {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

  }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    console.log(id);
    this.thePerson = LUKAS.find(p => p.id == id);
    console.log(this.thePerson);
    if (this.thePerson == undefined)
      this.router.navigate(['home']);

    if (this.thePerson.rating || this.thePerson.rating == 0) {
      let tempRating: number = this.thePerson.rating;
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
