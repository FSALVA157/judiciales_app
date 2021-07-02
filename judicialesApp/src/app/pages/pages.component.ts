import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../common/global-constants';
import { EstadoCivilModel } from '../models/estado_civil.model';
import { EstadoCivilService } from '../services/estado-civil.service';
import { TablasArray } from '../common/tablas-array';
import { TablasEscencialesService } from '../services/tablas-escenciales.service';
import { SexoModel } from '../models/sexo.model';
import { DepartamentoModel } from '../models/departamento.model';
import { ZonaResidenciaModel } from '../models/zona-residencia.model';
import { NacionalidadModel } from '../models/nacionalidad.model';
import { EstablecimientoProcedenciaModel } from '../models/establecimiento-procedencia.model';
import { EstadoProcesalModel } from '../models/estado-procesal.model';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  unidad_nombre: string = "";

  
  constructor(
    private tablasEscencialesService: TablasEscencialesService

  ) { }
  
  ngOnInit(): void {
    this.unidad_nombre = globalConstants.unidad_nombre;

    //CREACION DE ARRAYS PARA DROPDOWN
    this.listaEstadoCivil();
    this.listaDepartamento();


    this.listaNacionalidad();
    this.listaSexo();
    this.listaTipoDelito();
    this.listaZonaResidencia();
    //FIN CREACION DE ARRAYS PARA DROPDOWN
  }


  //LISTADO COMPLETO DE DEPARTAMENTO
  listaDepartamento() {
    this.tablasEscencialesService.getListaDepartamentoTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.departamento, value: elemento.id_departamento}
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

  //LISTADO COMPLETO DE ESTABLECIMIENTO-PROCEDENCIA
  listaEstablecimientoProcedencia() {
    this.tablasEscencialesService.getListaEstablecimientoProcedenciaTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.establecimiento_procedencia, value: elemento.id_establecimiento_procedencia}
            TablasArray.drop_establecimiento_procedencia.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE ESTABLECIMIENTO-PROCEDENCIA

  //LISTADO COMPLETO DE ESTADO-CIVIL
  listaEstadoCivil() {
    this.tablasEscencialesService.getListaEstadoCivilTodos()
      .subscribe(
        data => {        
             
             
          //carga de estados civil para dropdown
          for (let estado_civil of data){
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

   //LISTADO COMPLETO DE ESTADO-PROCESAL
   listaEstadoProcesal() {
    this.tablasEscencialesService.getListaEstadoProcesalTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.estado_procesal, value: elemento.id_estado_procesal}
            TablasArray.drop_estado_procesal.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );      
  }
  //FIN LISTADO COMPLETO DE ESTADO-PROCESAL

  //LISTADO COMPLETO DE JURISDICCION
  listaJurisdiccion() {
    this.tablasEscencialesService.getListaJurisdiccionTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.jurisdiccion, value: elemento.id_jurisdiccion}
            TablasArray.drop_jurisdiccion.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );      
  }
  //FIN LISTADO COMPLETO DE JURISDICCION

  //LISTADO COMPLETO DE JUZGADO
  listaJuzgado() {
    this.tablasEscencialesService.getListaJuzgadoTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.Juzgado, value: elemento.id_juzgado}
            TablasArray.drop_juzgado.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );      
  }
  //FIN LISTADO COMPLETO DE JUZGADO



  //LISTADO COMPLETO DE NACIONALIDAD
  listaNacionalidad() {
    this.tablasEscencialesService.getListaNacionalidadTodos()
      .subscribe(
        data => {        
             
          //carga de estados civil para dropdown
          for (let nacionalidad of data){
            let objeto= {label: nacionalidad.nacionalidad, value: nacionalidad.id_nacionalidad}
            TablasArray.drop_nacionalidad.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE NACIONALIDAD

  //LISTADO COMPLETO DE SEXO
  listaSexo() {
    this.tablasEscencialesService.getListaSexoTodos()
      .subscribe(
        data => {   
          //carga para dropdown
          for (let sexo of data){
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
  //FIN LISTADO COMPLETO DE SEXO

  //LISTADO COMPLETO DE TIPO-DELITO
  listaTipoDelito() {
    this.tablasEscencialesService.getListaTipoDelitoTodos()
      .subscribe(
        data => {        
             
          //carga de estados civil para dropdown
          for (let tipo_delito of data){
            let objeto= {label: tipo_delito.tipo_delito, value: tipo_delito.id_tipo_delito}
            TablasArray.drop_tipo_delito.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE TIPO-DELITO

  //LISTADO COMPLETO DE ZONA-RESIDENCIA
  listaZonaResidencia() {
    this.tablasEscencialesService.getListaZonaResidenciaTodos()
      .subscribe(
        data => {        
              
          //carga de estados civil para dropdown
          for (let zona_residencia of data){
            let objeto= {label: zona_residencia.zona_residencia, value: zona_residencia.id_zona_residencia}
            TablasArray.drop_zona_residencia.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE ZONA-RESIDENCIA

  

}
