import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg'),
  ];

  getRecipes() {
    // slice is to get just a copy, not a reference.
    return this.recipes.slice();
  }
}
