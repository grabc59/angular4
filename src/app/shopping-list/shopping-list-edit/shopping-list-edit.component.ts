import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  
  addBtnClick(name, amount) {
    console.log(name, amount);
    this.itemAdded.emit({
      name, 
      amount
    })
  }

}
