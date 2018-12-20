import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  recipes: Recipe[] = [
    new Recipe('arroz con leche', 'un rico arroz con leche de postre','https://unareceta.com/wp-content/uploads/2014/04/arroz-con-leche-y-miel-640x427.jpg'),
    new Recipe('arroz con leche', 'un rico arroz con leche de postre','https://unareceta.com/wp-content/uploads/2014/04/arroz-con-leche-y-miel-640x427.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }
  
}
