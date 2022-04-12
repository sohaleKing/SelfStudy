import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
})
export class NavBarComponent implements OnInit {
  navList = ["about", "products", "contact", "news"];
  constructor() {}

  ngOnInit() {}
}
