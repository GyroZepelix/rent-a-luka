import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() home?: string;
  @Input() store?: string;
  @Input() information?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
