import { Injectable } from '@angular/core';
import { Ingrediente } from '../shared/ingredientes.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredientesCambiados = new Subject<Ingrediente[]>();
  startedEditing = new Subject<number>();

  private ingredientes: Ingrediente[] = [
    new Ingrediente('arroz', 20),
    new Ingrediente('azucar', 100),
  ];
  
   getIngredientes() {
    return this.ingredientes.slice(); // devolvemos una copia del  array, manteniendo almacenado el original en el servicio
  }

  getIngrediente(index: number) {
    return this.ingredientes[index];
  }

  agregarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredientesCambiados.next(this.ingredientes.slice()); // con next el componente que se suscriba al subject recibirá lo que se le pase como argumento, en este caso una copia del array
  }

  agregarIngredientes(ingredientes: Ingrediente[]) {
   this.ingredientes.push(...ingredientes);
   this.ingredientesCambiados.next(this.ingredientes.slice());
  }

  udpateIngrediente(index: number, newIngrediente: Ingrediente) {
    this.ingredientes[index] = newIngrediente;
    this.ingredientesCambiados.next(this.ingredientes.slice());
  }

  deleteIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
    this.ingredientesCambiados.next(this.ingredientes.slice());
  }

}
