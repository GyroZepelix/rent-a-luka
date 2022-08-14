import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clicked = new EventEmitter();

  clickedA(id: number): void {
    this.clicked.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
