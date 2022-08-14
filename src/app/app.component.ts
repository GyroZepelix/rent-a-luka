import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rent-a-luka';
  @ViewChild('store') store: HTMLElement;

  scroll(id: number) {
    console.log(id);
    if (id == 1)
      this.store.scrollIntoView({ behavior: 'smooth' });
  }
}
