import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediente } from '../shared/ingredientes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>(); 
  recetasCambiadas = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('arroz con leche',
     'un rico arroz con leche de postre',
     './assets/arroz-con-leche.jpg',
     [
       new Ingrediente('arroz', 1),
       new Ingrediente('azucar',2)
     ]),
    new Recipe('fabada asturiana',
     'una buena fabada al estilo asturiano',
     './assets/fab.jpg',
     [
      new Ingrediente('fabes', 210),
      new Ingrediente('morcilla',2),
      new Ingrediente('chorizo',1)
     ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // para evitar retornar directamente la referencia al objeto array ponemos slice() que devuelve una copia idéntica. Evitamos así modificar por accidente los datos originales
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  agregarIngredientesAListaCompra(ingredientes: Ingrediente[]) {
    this.slService.agregarIngredientes(ingredientes);
  }

  agregarReceta(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recetasCambiadas.next(this.recipes.slice()); // emite valores a los suscriptores
  }
  
  actualizarReceta(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recetasCambiadas.next(this.recipes.slice());
  }

  borrarReceta(index: number) {
    this.recipes.splice(index, 1);
    this.recetasCambiadas.next(this.recipes.slice());
  }

}
