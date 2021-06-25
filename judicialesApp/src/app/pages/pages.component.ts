import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../common/global-constants';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  unidad_nombre: string = "";
  constructor() { }

  ngOnInit(): void {
    this.unidad_nombre = globalConstants.unidad_nombre;
  }

}
