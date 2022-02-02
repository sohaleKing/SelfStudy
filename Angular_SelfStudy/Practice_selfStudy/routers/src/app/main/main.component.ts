import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  template: `
    <div>
      <a routerLink="firstComp"
        >click here to load the first component down the page!</a
      >
    </div>
    <div>============================</div>
    <div>
      <button (click)="loadingSecond()">
        click me to see the second one there
      </button>
    </div>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor(private routing: Router) {}

  loadingSecond() {
    this.routing.navigate(["secondComp"]);
  }
  ngOnInit() {}
}
