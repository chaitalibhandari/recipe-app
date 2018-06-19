import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  tripForm: FormGroup;
  recipe:Recipe;
  ifNotImage:boolean=false;
  url:string;
  successMessage:boolean=false;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    let ingredients: FormArray = new FormArray([]);
    this.tripForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      avatar:new FormControl(''),
      description:new FormControl('',Validators.required),
      ingredients: ingredients
    });
    this.addIngredients();

   // console.log("form=",this.tripForm.get('ingredients').invalid);

  }

  addIngredients(){
    (<FormArray>this.tripForm.controls['ingredients']).push(
      new FormGroup({
        ingredient: new FormControl('', Validators.required),
      })
    )
  }

  onFileChange(event){


    if (event.target.files && event.target.files[0]) {
      
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {

        let file = event.target.files[0];
      //  console.log(file);
        if(file.type=='image/jpeg' || file.type=='image/jpg' || file.type=='image/png')
        {
          this.ifNotImage=false;
          reader.readAsDataURL(file);
          this.tripForm.get('avatar').setValue(file);
          console.log("IMAGE=",this.tripForm.get('avatar').value);
          reader.onload = (event:any) => {
            this.url = event.target.result;

          }
        }
        else{
          this.ifNotImage=true;
        }  

    }
  }
 }

 removeIngredient(i: number) {
  
  const control = <FormArray>this.tripForm.controls['ingredients'];
  control.removeAt(i);
}
private prepareSave(){

  let input = new FormData();
  input.append('name', this.name.value);
  input.append('description', this.description.value);
  input.append('avatar', this.tripForm.get('avatar').value);
  for (let i = 0; i < this.tripForm.value.ingredients.length; i++)
  {
    input.append('ingredients[]',this.tripForm.value.ingredients[i].ingredient);
  }
  return input;
}

clearFile() {
  this.tripForm.get('avatar').setValue(null);
  this.fileInput.nativeElement.value = '';
  this.ifNotImage=false;
  this.url =" ";

}
save()
{
  const formModel = this.prepareSave();
  //console.log(formModel);
  this.recipeService.addrecipe(formModel).subscribe(
    response => {
      this.successMessage=true;

      
      this.initForm();
      this.clearFile();

      setTimeout(() => {
        this.successMessage = false;
      }, 3000);

    },
    error=>{
      console.log('Error:', error);

    }
  );
}
  get name(){
    return this.tripForm.get('name');
  }
  get description(){
    return this.tripForm.get('description');
  }
  get ingredient(){
    
    return this.tripForm.get('ingredients');
  }
}
