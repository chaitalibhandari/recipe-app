import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-outer-nav',
  templateUrl: './outer-nav.component.html',
  styleUrls: ['./outer-nav.component.css']
})
export class OuterNavComponent implements OnInit {

  showLogin:boolean=true;
  showLogout:boolean=false;
  constructor(private userService:UsersService) { }

  ngOnInit() {

    if(this.userService.isLoggedIn())
    {
      this.showLogin=false;
      this.showLogout=true;
      
    }
    else{
      console.log("outerfalse");
    }
  }

}
