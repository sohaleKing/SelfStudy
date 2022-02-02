import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-image",
  templateUrl: "./add-image.component.html",
  styles: [],
})
export class AddImageComponent implements OnInit {
  constructor() {}
  url: string = "../../assets/img/cat1.jpg";
  addImage() {
    const img = document.createElement("img");
    img.setAttribute("src", this.url);
    const target = document.getElementById("target");
    target.appendChild(img);
  }
  ngOnInit() {}
}
