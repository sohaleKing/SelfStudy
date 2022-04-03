/*import { Component, VERSION } from "@angular/core";
import { interval } from "rxjs";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  counter: number;
  isDisabled: boolean;
  isVisibale: boolean;
  timerStopped: boolean;

  constructor() {
    this.isDisabled = true;
    this.isVisibale = false;
    this.counter = 0;
    this.timerStopped = false;
  }

  start() {
    this.isDisabled = false;
    this.isVisibale = true;
    this.timerStopped = false;
    interval(300)
      .pipe(takeWhile(() => !this.timerStopped))
      .subscribe(() => {
        this.counter = this.counter + 1;
      });
  }
  stop() {
    this.isDisabled = true;
    this.timerStopped = true;
  }
  reset() {
    this.counter = 0;
    this.isVisibale = true;
  }
}
*/
