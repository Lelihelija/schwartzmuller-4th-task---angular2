import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() btnsEmitter: EventEmitter<number | null> = new EventEmitter<
    number | null
  >()
  interval?: ReturnType<typeof setInterval>
  numberForEmit = 0

  constructor() {}

  ngOnInit(): void {}

  intervalFn(): void {
    this.interval = setInterval(this.incrementNumber.bind(this), 1000)
  }

  incrementNumber(): void {
    this.btnsEmitter.emit(++this.numberForEmit)
  }

  stopBtnClick(val: string): void {
    this.interval ? clearInterval(this.interval) : null
    this.numberForEmit = 0
    this.btnsEmitter.emit(null)
  }

  startBtnClick(val: string): void {
    this.intervalFn()
  }
}
