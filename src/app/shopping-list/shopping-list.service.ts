import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  
  ingredientAddedNotification = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  constructor() { }

  addToShoppingList(item) {
    this.ingredients.push(item);
    this.ingredientAddedNotification.emit(this.ingredients.slice());
  }
  
  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAddedNotification.emit(this.ingredients.slice());
  }

}
