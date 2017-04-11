import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG'),
    new Recipe('Another recipe', 'put the stuff in the thing', 'https://c1.staticflickr.com/6/5235/5906345163_6cf6e65531_b.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}
