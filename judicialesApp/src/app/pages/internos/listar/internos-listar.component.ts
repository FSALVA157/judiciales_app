import { Component, OnInit } from '@angular/core';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

@Component({
  selector: 'app-internos-listar',
  templateUrl: './internos-listar.component.html',
  styleUrls: ['../../pages.component.css']
})
export class InternosListarComponent implements OnInit {

  //array que se utiliza en el ngfor en el html
  total:number = 0;
  lista_internos: InternoModel[] = []; //array con los objetos internos  
  cols: any[]=[]; //array de columnas de la tabla  
  lista_internos_pdf: any[]=[]; //array que copia la lista de internos para crear el pdf
  exportColumns: any[] = []; //array de columnas para crear el pdf

  constructor(
    private internosService: InternosService
  ) { }

  ngOnInit(): void {
    this.listaInternos();

  }

  //LISTADO COMPLETO DE INTERNOS POR UNIDAD
  listaInternos() {
    //const unidad: number = globalConstants.unidad;
    //console.log("unidad del usuario", unidad);
    this.internosService.getListaInternosTodos()
      .subscribe(
        data => {                    
          this.total = data[1];
          this.lista_internos = data[0];
          //this.lista_internos = data;
          console.log("lista de internos", this.lista_internos);
          //armado de array de usuarios para exportar el pdf
          //this.lista_usuarios_pdf = this.lista_usuarios;
          // console.log("columnas lista creada para pdf", this.exportColumns);
          // console.log("lista creada para pdf", this.lista_usuarios_pdf);
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS

}
