import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'A Test Description1',
      'https://delightfuladventures.com/wp-content/uploads/2020/04/vegan-broccoli-pasta-recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'A Test Description2',
      'https://delightfuladventures.com/wp-content/uploads/2020/04/vegan-broccoli-pasta-recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
