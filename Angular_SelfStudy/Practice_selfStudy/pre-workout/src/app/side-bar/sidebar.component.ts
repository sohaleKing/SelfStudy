import { Component } from "@angular/core";

@Component({
  selector: "sidebar",
  template: "<div><router-outlet></router-outlet></div>",
  styles: [
    `
      div {
        border: 1px solid black;
        padding: 15px;
      }
    `,
  ],
})
export class Sidebar {}
