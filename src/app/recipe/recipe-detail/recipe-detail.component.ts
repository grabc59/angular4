import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Ingredient } from 'app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.currentRecipe.ingredients);
  }


}
