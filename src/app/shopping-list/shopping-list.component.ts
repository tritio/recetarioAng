import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingredientes.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingrediente[] = [
    new Ingrediente('arroz', 20),
    new Ingrediente('azucar', 100),
  ];
  constructor() { }

  ngOnInit() {
  }

}
