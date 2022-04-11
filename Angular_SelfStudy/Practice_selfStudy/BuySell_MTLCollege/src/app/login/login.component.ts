import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
connectedUser = {
  first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    zip: ''
}
@ViewChild('f') loginForm : NgForm;
@ViewChild('password') password: ElementRef;


fColor : string = "#ff0000";
isOK = false;
fSize = 23;
  constructor(private router: Router, private usersService : UsersService) {
   
  }

  ngOnInit() {
  }


  loginUser(){
    console.log(this.loginForm);
  

    let wrongCredentials = true;
   let accounts = this.usersService.users;
   for(let account of accounts){
     if(this.loginForm.value.email == account.email && 
      this.loginForm.value.password == account.password ){
        wrongCredentials = false;
        this.router.navigate(['/home']);
      }
   }

   if(wrongCredentials){
     alert("please verify your email or password")
   }

  }
}
