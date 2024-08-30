import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-app';
  nome1= "";
  idade1= 0;

  valores= [{
    nome:'joana',
    idade: 35,
  },{
    nome: "Carlos",
    idade:45,
  }]

  Adiciona() {
    this.valores.push({nome:this.nome1,idade: this.idade1})
  }
}
