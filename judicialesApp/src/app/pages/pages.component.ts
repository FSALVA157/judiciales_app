import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../common/global-constants';
import { EstadoCivilModel } from '../models/estado_civil.model';
import { EstadoCivilService } from '../services/estado-civil.service';
import { TablasArray } from '../common/tablas-array';
import { TablasEscencialesService } from '../services/tablas-escenciales.service';
import { SexoModel } from '../models/sexo.models';
import { DepartamentoModel } from '../models/departamento.models';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  unidad_nombre: string = "";

  lista_estado_civil: EstadoCivilModel[] = []; //array con los objetos estado-civil

  lista_sexo: SexoModel[] = []; //array con los objetos sexo

  lista_departamento: DepartamentoModel[] = []; //array con los objetos sexo
  
  constructor(
    private tablasEscenciales: TablasEscencialesService

  ) { }
  
  ngOnInit(): void {
    this.unidad_nombre = globalConstants.unidad_nombre;

    //CREACION DE ARRAYS PARA DROPDOWN
    this.listaEstadoCivil();
    this.listaSexo();
    //FIN CREACION DE ARRAYS PARA DROPDOWN
  }


  //LISTADO COMPLETO DE ESTADO-CIVIL
  listaEstadoCivil() {
    //const unidad: number = globalConstants.unidad;
    //console.log("unidad del usuario", unidad);
    this.tablasEscenciales.getListaEstadoCivilTodos()
      .subscribe(
        data => {        
             
          this.lista_estado_civil = data;   
          //carga de estados civil para dropdown
          for (let estado_civil of this.lista_estado_civil){
            let objeto= {label: estado_civil.estado_civil, value: estado_civil.id_estado_civil}
            TablasArray.drop_estado_civil.push(objeto)

          }
           //fin carga de estados civil para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE ESTADO-CIVIL

  //LISTADO COMPLETO DE ESTADO-CIVIL
  listaSexo() {
    //const unidad: number = globalConstants.unidad;
    //console.log("unidad del usuario", unidad);
    this.tablasEscenciales.getListaSexoTodos()
      .subscribe(
        data => {        
             
          this.lista_sexo = data;  
          //carga para dropdown
          for (let sexo of this.lista_sexo){
            let objeto= {label: sexo.sexo, value: sexo.id_sexo}
            TablasArray.drop_sexo.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE ESTADO-CIVIL

  //LISTADO COMPLETO DE DEPARTAMENTO
  listaDepartamento() {
    //const unidad: number = globalConstants.unidad;
    //console.log("unidad del usuario", unidad);
    this.tablasEscenciales.getListaDepartamentoTodos()
      .subscribe(
        data => {        
             
          this.lista_departamento = data;  
          //carga de estados civil para dropdown
          for (let departamento of this.lista_departamento){
            let objeto= {label: departamento.departamento, value: departamento.id_departamento}
            TablasArray.drop_departamento.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE DEPARTAMENTO

}
