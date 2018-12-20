import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log("constructor llamado");
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges llamados");
    console.log(changes);
   }

   ngDoCheck() {
     console.log("ngDocheck llamado")
     
   }

  ngOnInit() {
  }

}
