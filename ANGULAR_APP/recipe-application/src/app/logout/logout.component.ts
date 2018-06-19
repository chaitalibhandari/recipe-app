import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user_type:number;
  constructor(private urlService:UrlService,
    private route:ActivatedRoute,
    private userService:UsersService,
    private reviewService:ReviewService,
    private router:Router) { }

  ngOnInit() {

  
     
      this.user_type=this.userService.getUser().usertype;
      this.userService.logout();

      if(this.user_type=1)
      {
        this.router.navigate(['/']);
      }
      else{

        this.router.navigate(['admin']);
      }

      
     
    
  }

}
