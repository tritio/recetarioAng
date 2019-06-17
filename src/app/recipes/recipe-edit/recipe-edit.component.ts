import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) =>{
              this.id = +params['id'];  
              this.editMode = params['id'] != null;     
              this.initForm();         
            }
        );
  }

  onSubmit() {
    /* const newRecipe = new Recipe(
        this.recipeForm.value['nombre'],
        this.recipeForm.value['descripcion'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredientes']); */
    if(this.editMode) {
      //this.recipeService.actualizarReceta(this.id, newRecipe); otra forma 
      this.recipeService.actualizarReceta(this.id, this.recipeForm.value);
    } else {
     // this.recipeService.agregarReceta(newRecipe);
        this.recipeService.agregarReceta(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAgregarIngrediente() {
    (<FormArray>this.recipeForm.get('ingredientes')).push(
      new FormGroup({
        'nombre': new FormControl(null, Validators.required),
        'cantidad': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
        }
      )
    )
  }

  onDeleteIngrediente(index: number) {
    (<FormArray>this.recipeForm.get('ingredientes')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredientes')).controls;
  }

   private initForm() {     
     let recipeName ='';
     let recipeImagePath ='';
     let recipeDescription ='';
     let recipeIngredientes = new FormArray([]);

     if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
       recipeName = recipe.nombre;
       recipeImagePath = recipe.imagePath;
       recipeDescription = recipe.descripcion;
       if(recipe['ingredientes']) {
         for (let ingrediente of recipe.ingredientes){
           recipeIngredientes.push(
             new FormGroup({
               'nombre': new FormControl(ingrediente.nombre, Validators.required),
               'cantidad': new FormControl(ingrediente.cantidad,[
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
             })
           )
         }
       }
     }

      this.recipeForm = new FormGroup({
        'nombre': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'descripcion': new FormControl(recipeDescription, Validators.required),
        'ingredientes': recipeIngredientes
      });
   }

}
