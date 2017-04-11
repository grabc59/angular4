import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  
  addBtnClick(name, amount) {
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addToShoppingList(newIngredient);
  }

}
