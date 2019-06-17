import { RecipeService } from './../recipe.service';
import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
receta: Recipe;
id: number;
  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.receta = this.recipeService.getRecipe(this.id);
            }
        );
  }

  agregarAlCarritoCompra() {
    this.recipeService.agregarIngredientesAListaCompra(this.receta.ingredientes);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});  // funciona igual que la siguiente línea:
   // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});

  }

  onDeleteRecipe() {
    this.recipeService.borrarReceta(this.id);
    this.router.navigate(['/recipes']);
  }

}
