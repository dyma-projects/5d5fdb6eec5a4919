import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nom: string;
  color:string;
  constructor() { }

  ngOnInit() {
    this.nom = "Hello";
    this.color = "yellow";
  }

  modifierCouleur (color : string) : void {
    this.color = color;
  }

}
