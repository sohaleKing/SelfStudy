import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  btnText: string = 'See more';

  @Input() laptop : {
    id : number,
    name : string, 
    price : string, 
    description : string
  };

  btnStatus : boolean = true;

  constructor() {

    setTimeout( () => { this.btnStatus = false; } ,2000);

   }


   infos(){
     alert("this is the Card Alert")
   }

  ngOnInit() {
  }

}
