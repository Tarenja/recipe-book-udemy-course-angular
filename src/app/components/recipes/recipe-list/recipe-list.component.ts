import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Test Description',
      'https://delightfuladventures.com/wp-content/uploads/2020/04/vegan-broccoli-pasta-recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'A Test Description',
      'https://delightfuladventures.com/wp-content/uploads/2020/04/vegan-broccoli-pasta-recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
