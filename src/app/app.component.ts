import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  valorCargado = 'receta';

  onNavigate(valor: string) {
    this.valorCargado = valor;
  }
/*   serverElements = [
    {type: 'blueprint', name: 'un server', content: 'cosas varias'},
    {type: 'server', name: 'otro', content: 'cosas chulas'}
]; */
 
/* onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
} */



}
