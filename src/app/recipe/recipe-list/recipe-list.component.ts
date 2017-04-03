import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG'),
    new Recipe('Another recipe', 'put the stuff in the thing', 'https://c1.staticflickr.com/6/5235/5906345163_6cf6e65531_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
