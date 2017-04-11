import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from "app/shared/ingredient.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 
              'A tasty schnitzel', 'http://kitchenproject.com/german/recipes/Schnitzel/schnitzel.jpg',
              [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
              ]),
    new Recipe('Another recipe', 
              'put the stuff in the thing', 'https://c1.staticflickr.com/6/5235/5906345163_6cf6e65531_b.jpg',
              [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 1)
              ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}
