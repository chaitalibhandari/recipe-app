import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  api_server:string="http://localhost/recipe-app/";
  
  image_url:string=this.api_server+"uploads"

  check_user:string=this.api_server+"users/check_user.php";
  check_user_name:string=this.api_server+"users/check_user_name.php";
  user_add_url:string=this.api_server+"users/add_user.php";

  //recipe
  add_recipe_url:string=this.api_server+"recipe/add_recipe.php";
  get_recipes_url:string=this.api_server+"recipe/get_recipes.php";
  get_recipe_url:string=this.api_server+"recipe/get_recipe.php";

  //comment
  add_commennt_url:string=this.api_server+"comment/add_comment.php";
  constructor() { }

}
