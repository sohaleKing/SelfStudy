import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <app-main></app-main>
    <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {
  title = "routers";
}
