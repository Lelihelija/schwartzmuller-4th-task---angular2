import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenArray: number[] = []
  oddArray: number[] = []
  numberForGame = 0
  constructor() {}

  onStartStopClick(e: number | null): void {
    if (e) {
      this.numberForGame = e
      e % 2 ? this.addOddNumber(e) : this.addEvenNumber(e)
    } else {
      this.numberForGame = 0
    }
  }

  addEvenNumber(val: number): void {
    this.evenArray.push(val)
  }

  addOddNumber(val: number): void {
    this.oddArray.push(val)
  }
}
