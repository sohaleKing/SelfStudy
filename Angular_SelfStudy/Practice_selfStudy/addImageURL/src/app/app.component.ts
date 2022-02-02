import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<app-add-image></app-add-image><router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {
  title = "addImageURL";
}
