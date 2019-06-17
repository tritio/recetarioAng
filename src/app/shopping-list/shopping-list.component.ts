
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingrediente } from '../shared/ingredientes.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientes: Ingrediente[];
  private subscription: Subscription;

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientes = this.slService.getIngredientes();
    this.subscription = this.slService.ingredientesCambiados
      .subscribe(
        (ingredientes: Ingrediente[]) => {
          this.ingredientes = ingredientes;
        }    
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index); // estamos emitiendo el valor del index disponible en el servicio, y puede ahora ser escuchado en otro lugar de la aplicación
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
