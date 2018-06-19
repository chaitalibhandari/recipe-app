import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  imageLink:string;
  constructor(private recipeService:RecipeService,private urlService:UrlService) {}

  ngOnInit() {
    this.recipeService.getrecipes().subscribe(
      (recipes: Recipe[])=> { 
        this.recipes=recipes;
        this.imageLink=this.urlService.image_url;
        console.log(this.recipes);
       },
      error=> { 
        console.log('error in fetching data',error) 
      }
    );
  }

}
