import { Injectable } from '@angular/core';
import { HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
  HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Recipe } from '../models/recipe';
@Injectable()
export class RecipeService {
  add_recipe_url=this.urlService.add_recipe_url;
  get_recipes_url=this.urlService.get_recipes_url;
  get_recipe_url=this.urlService.get_recipe_url;
  constructor(private httpClient:HttpClient,private urlService:UrlService) { 

  
  }
  addrecipe(recipe):Observable<Recipe>{
    return this.httpClient.post<Recipe>(this.add_recipe_url,recipe);
  
  }

  getrecipes():Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.get_recipes_url);
  }

  getRecipe(rec_id): Observable<Recipe> {
    // const params = new HttpParams().set('_page', "1").set('_limit', "1");
      const params = new HttpParams().set('id', rec_id);
      return this.httpClient.get<Recipe>(`${this.get_recipe_url}`,  { params });
    }  
}
