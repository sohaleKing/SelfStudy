import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  counter: number;
  isDisabled: boolean;

  constructor() {
    this.isDisabled = true;
  }

  start() {
    this.isDisabled = false;
  }
  stop() {
    this.isDisabled = true;
  }
  reset() {}
}
