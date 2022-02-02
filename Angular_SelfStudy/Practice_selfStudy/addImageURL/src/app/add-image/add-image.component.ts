import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-image",
  templateUrl: "./add-image.component.html",
  styleUrls: ["./add-image.component.css"],
})
export class AddImageComponent implements OnInit {
  constructor(public http: HttpClient) {}
  //url: string = "../../assets/img/cat1.jpg";
  url: string;
  addImage() {
    this.http
      .get("https://api.thedogapi.com/v1/images/search")
      .subscribe((data) => {
        //console.log(data[0].url);
        this.url = data[0].url;
        console.log(this.url);
        const img = document.createElement("img");
        img.setAttribute("src", this.url);
        img.setAttribute("width", "200px");
        const target = document.getElementById("target");
        target.appendChild(img);
      });
  }
  ngOnInit() {}
}
