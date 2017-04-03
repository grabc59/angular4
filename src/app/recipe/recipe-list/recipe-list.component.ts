import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiKhpqF8YbTAhVk2oMKHe-7DbwQjRwIBw&url=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Frecipe%2F&psig=AFQjCNFY8QxYq2_wZVi8_hzCVravmS8PLw&ust=1491260643246575')
  ];

  constructor() { }

  ngOnInit() {
  }

}
