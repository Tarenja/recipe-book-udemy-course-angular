import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root',
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vegan Broccoli Pasta',
      'A super lovely vegan broccoli pasta, healthy and tasty!',
      'https://delightfuladventures.com/wp-content/uploads/2020/04/vegan-broccoli-pasta-recipe.jpg',
      [new Ingredient('Pasta', 500), new Ingredient('Broccoli', 1)]
    ),
    new Recipe(
      'Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the entire array
  }

  constructor() {}
}
