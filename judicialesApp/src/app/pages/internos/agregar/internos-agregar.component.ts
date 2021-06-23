import { Component, OnInit } from '@angular/core';
import { InternoModel } from '../../../models/interno.model';

@Component({
  selector: 'app-internos-agregar',
  templateUrl: './internos-agregar.component.html',
  styles: [
  ]
})
export class InternosAgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let interno= new InternoModel;

    interno.prontuario=254;
    interno.apellido_1 = "Ortiz";
    interno.apellido_2 ="Ruiz";
    interno.nombre_1 = "Juan";
    interno.nombre_2 = "Luis";
    interno.nombre_3 = "marcos";
    
    console.log("interno", interno);

  }

}
