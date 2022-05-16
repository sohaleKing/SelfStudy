import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor() {}
  language: string = "en";

  //make sure you are adding FormModule to the module that covers that component
  //just by adding the ngModel the angular will assign anything you select to language value! simple as that!
  /* all you have to do to bind the selected item to language variable its just this
  <select [(ngModel)]="language">
    <option value="en">English</option>
    */

  newLanguage: string;

  onChangeLanguage(val: string) {
    this.showChanges(val);
  }
  showChanges(val: string) {
    this.newLanguage = val;
  }
}
