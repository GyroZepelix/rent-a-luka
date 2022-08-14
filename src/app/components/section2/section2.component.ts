import { Component, OnInit } from '@angular/core';
import { LUKAS } from 'src/app/lukas';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  lukas: Person[] = LUKAS;

  constructor() { }

  ngOnInit(): void {
  }

}
