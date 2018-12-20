import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() valorSeleccionado = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(valor) {
    this.valorSeleccionado.emit(valor);
  }
}
