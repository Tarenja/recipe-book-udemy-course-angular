import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root',
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the entire array
  }

  constructor() {}
}
