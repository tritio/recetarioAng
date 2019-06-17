import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingrediente } from 'src/app/shared/ingredientes.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 /*  @ViewChild('nombreInput') nombreInputRef: ElementRef;
  @ViewChild('cantidadInput') cantidadInputRef: ElementRef; */

    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingrediente;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
        .subscribe(
          (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getIngrediente(index);
            this.slForm.setValue({
              nombre: this.editedItem.nombre,
              cantidad: this.editedItem.cantidad     
            })
          }
        );
  }

  onSubmit(form: NgForm) {
   // const ingNombre = this.nombreInputRef.nativeElement.value;
    const value = form.value;
    const nuevoIngrediente = new Ingrediente(value.nombre, value.cantidad);
    if(this.editMode) {
      this.slService.udpateIngrediente(this.editedItemIndex, nuevoIngrediente);
    } else {
      this.slService.agregarIngrediente(nuevoIngrediente);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngrediente(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
