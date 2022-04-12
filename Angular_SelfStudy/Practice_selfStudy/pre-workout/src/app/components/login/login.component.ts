import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private routerClick: Router) {}

  ngOnInit() {}

  login() {
    this.routerClick.navigate(["/"]);
  }
}
