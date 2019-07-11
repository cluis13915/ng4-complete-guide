import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();

    this.http.put('https://ng4-complete-guide-course.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://ng4-complete-guide-course.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => ({
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }));
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}
