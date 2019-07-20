import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() numberEvent = new EventEmitter<number>();

  intervalId: any;
  startGame() {
    var currentNumber = 0;
    this.intervalId = setInterval(() => {
      this.numberEvent.emit(currentNumber);
      currentNumber += 1;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}