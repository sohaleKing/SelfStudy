import { Component, OnInit } from "@angular/core";

@Component({
  selector: "footer",
  template: "<div>Footer<div>",
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
//when you put onInIt, it will import it and also it will need to have ngOnInIt method inside the your component(impelementing! encapsulating)
//A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
//Define an ngOnInit() method to handle any additional initialization tasks.
