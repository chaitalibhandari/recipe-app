import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
//import { Comment } from '../models/comment';
import 'rxjs/add/operator/switchMap';
import { UrlService } from '../services/url.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Review } from '../models/review';
import { UsersService } from '../services/users.service';
import { ReviewService } from '../services/review.service';
@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  id:number;
  showCommentBox:boolean=false;
  user_id:number;
  messageBody:string;
  recipe: Recipe = new Recipe();
  imageLink:string;
  review:Review;
  form: FormGroup;
  successMessage:boolean=false;
  @ViewChild('f') commentForm: NgForm;
  constructor(
    private recipeService:RecipeService,
    private urlService:UrlService,
    private route:ActivatedRoute,
    private userService:UsersService,
    private reviewService:ReviewService,
    private router:Router) {
      this.review=new Review();
    }

  ngOnInit() {
    this.createForm();
   // console.log("LoggedIN=",this.userService.isLoggedIn());

   if(this.userService.isLoggedIn())
    {
      this.showCommentBox=true;
      this.user_id=this.userService.getUser().id;
      
      this.messageBody=" "
      
    }
    else{
     // this.showCommentBox=true;
      this.messageBody="Please login to add comment on this recipe";
    }

    this.imageLink=this.urlService.image_url;
    this.route.paramMap
      .switchMap(params => {
        this.id = +params.get('id');
        return this.recipeService.getRecipe(this.id);
        
      })
      .subscribe(
        (recipe: Recipe) => {
          console.log(`Success: Get recipe successful. (id: ${this.id})`);
          this.recipe = recipe;
          console.log(this.recipe);
        },
        error => {
          console.log(`Error: Get recipe failed! (id: ${this.id})`, error);
        }
      );

  }

  createForm(){

    this.form=new FormGroup({
      review:new FormControl('',Validators.required), 
    })
  }

  onSave(){

    this.review.rec_id=this.id;
    this.review.user_id=this.user_id;
    this.review.review=this.form.value.review;
    this.reviewService.addComment(this.review).subscribe(
      response => {
        this.successMessage=true;
  
        
        //this.form.reset();

        this.ngOnInit();

        setTimeout(() => {
          this.successMessage = false;
        }, 3000);
  
      },
      error=>{
        console.log('Error:', error);
  
      }
    );
    

    
  }
  get revie(){

    return this.form.get('review');
  }
}
