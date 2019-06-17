import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeDetailsComponent } from '../../recipe-details/recipe-details.component';
//import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() receta: Recipe;
 @Input() index: number;

 // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

/*   onSelected() {
   this.recipeService.recipeSelected.emit(this.receta);
  } */
  

}
