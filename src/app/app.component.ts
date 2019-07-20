import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receivedNumber: number;

  updateNumber(provided: number) {
    this.receivedNumber = provided;
  }
}