import { Component, OnInit } from '@angular/core';
import { globalConstants } from '../common/global-constants';
import { TablasArray } from '../common/tablas-array';
import { TablasEscencialesService } from '../services/tablas-escenciales.service';


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
    // this.listaDepartamento();
    // this.listaEstablecimientoProcedencia();
    // this.listaEstadoCivil();
    // this.listaEstadoProcesal();
    // this.listaJurisdiccion();
    // this.listaJuzgado();
    // this.listaNacionalidad();
    // this.listaNarizForma();
    // this.listaNarizTamanio();
    // this.listaNivelEducacion();
    // this.listaOficio();
    // this.listaOjosColor();
    // this.listaOjosTamanio();
    // this.listaPabellon();
    // this.listaPeloColor();
    // this.listaPeloTipo();
    // this.listaPiel();
    // this.listaProvincia();
    // this.listaReincidencia();
    // this.listaReingreso();
    // this.listaReligion();
    // this.listaSexo();
    // this.listaTipoCondena();
    // this.listaTipoDefensor();
    // this.listaTipoDelito();
    // this.listaZonaResidencia();
    //FIN CREACION DE ARRAYS PARA DROPDOWN
    
  }


  //LISTADO COMPLETO DE DEPARTAMENTO
  listaDepartamento() {
    this.tablasEscencialesService.getListaDepartamentoTodos()
      .subscribe(
        data => {        
              
          //carga para dropdown
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
              
          //carga para dropdown
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
              
          //carga para dropdown
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
              
          //carga  para dropdown
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
              
          //carga para dropdown
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
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.nacionalidad, value: elemento.id_nacionalidad}
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

  //LISTADO COMPLETO DE NARIZ-FORMA
  listaNarizForma() {
    this.tablasEscencialesService.getListaNarizFormaTodos()
      .subscribe(
        data => {        
              
          //carga para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.nariz_forma, value: elemento.id_nariz_forma}
            TablasArray.drop_nariz_forma.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE NARIZ-FORMA

  //LISTADO COMPLETO DE NARIZ-TAMANIO
  listaNarizTamanio() {
    this.tablasEscencialesService.getListaNarizTamanio()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.nariz_tamanio, value: elemento.id_nariz_tamanio}
            TablasArray.drop_nariz_tamanio.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE NARIZ-TAMANIO

  //LISTADO COMPLETO DE NIVEL-EDUCACION
  listaNivelEducacion() {
    this.tablasEscencialesService.getListaNivelEducacionTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.nivel_educacion, value: elemento.id_nivel_educacion}
            TablasArray.drop_nivel_educacion.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE NIVEL-EDUCACION

  //LISTADO COMPLETO DE OFICIO
  listaOficio() {
    this.tablasEscencialesService.getListaOficioTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.oficio, value: elemento.id_oficio}
            TablasArray.drop_oficio.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE OFICIO

  //LISTADO COMPLETO DE OJOS-COLOR
  listaOjosColor() {
    this.tablasEscencialesService.getListaOjosColorTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.ojos_color, value: elemento.id_ojos_color}
            TablasArray.drop_ojos_color.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE OJOS-COLOR

  //LISTADO COMPLETO DE OJOS-TAMANIO
  listaOjosTamanio() {
    this.tablasEscencialesService.getListaOjosTamanioTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.ojos_tamanio, value: elemento.id_ojos_tamanio}
            TablasArray.drop_ojos_tamanio.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE OJOS-TAMANIO

  //LISTADO COMPLETO DE PABELLON
  listaPabellon() {
    this.tablasEscencialesService.getListaPabellonTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.pabellon, value: elemento.id_pabellon}
            TablasArray.drop_pabellon.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE PABELLON

  //LISTADO COMPLETO DE PELO-COLOR
  listaPeloColor() {
    this.tablasEscencialesService.getListaPeloColorTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.pelo_color, value: elemento.id_pelo_color}
            TablasArray.drop_pelo_color.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE PELO-COLOR

  //LISTADO COMPLETO DE PELO-TIPO
  listaPeloTipo() {
    this.tablasEscencialesService.getListaPeloTipoTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.pelo_tipo, value: elemento.id_pelo_tipo}
            TablasArray.drop_pelo_tipo.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE PELO-TIPO

  //LISTADO COMPLETO DE PIEL
  listaPiel() {
    this.tablasEscencialesService.getListaPielTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.piel, value: elemento.id_piel}
            TablasArray.drop_piel.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE PIEL

  //LISTADO COMPLETO DE PROVINCIA
  listaProvincia() {
    this.tablasEscencialesService.getListaProvinciaTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.provincia, value: elemento.id_provincia}
            TablasArray.drop_provincia.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE PROVINCIA

  //LISTADO COMPLETO DE REINCIDENCIA
  listaReincidencia() {
    this.tablasEscencialesService.getListaReincidenciaTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.reincidencia, value: elemento.id_reincidencia}
            TablasArray.drop_reincidencia.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE REINCIDENCIA

  //LISTADO COMPLETO DE REINGRESO
  listaReingreso() {
    this.tablasEscencialesService.getListaReingresoTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.reingreso, value: elemento.id_reingreso}
            TablasArray.drop_reingreso.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE REINGRESO

  //LISTADO COMPLETO DE RELIGION
  listaReligion() {
    this.tablasEscencialesService.getListaReligionTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.religion, value: elemento.id_religion}
            TablasArray.drop_religion.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE RELIGION

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

  //LISTADO COMPLETO DE TIPO-CONDENA
  listaTipoCondena() {
    this.tablasEscencialesService.getListaTipoCondenaTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.tipo_condena, value: elemento.id_tipo_condena}
            TablasArray.drop_tipo_condena.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE TIPO-CONDENA

  //LISTADO COMPLETO DE TIPO-DEFENSOR
  listaTipoDefensor() {
    this.tablasEscencialesService.getListaTipoDefensorTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.tipo_defensor, value: elemento.id_tipo_defensor}
            TablasArray.drop_tipo_defensor.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE TIPO-DEFENSOR

  //LISTADO COMPLETO DE TIPO-DELITO
  listaTipoDelito() {
    this.tablasEscencialesService.getListaTipoDelitoTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
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

  //LISTADO COMPLETO DE UNIDAD
  listaUnidad() {
    this.tablasEscencialesService.getListaUnidadTodos()
      .subscribe(
        data => {        
             
          //carga  para dropdown
          for (let elemento of data){
            let objeto= {label: elemento.unidad, value: elemento.id_unidad}
            TablasArray.drop_provincia.push(objeto)

          }
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE UNIDAD

  //LISTADO COMPLETO DE ZONA-RESIDENCIA
  listaZonaResidencia() {
    this.tablasEscencialesService.getListaZonaResidenciaTodos()
      .subscribe(
        data => {        
              
          //carga para dropdown
          for (let zona_residencia of data){
            let objeto= {label: zona_residencia.zona_residencia, value: zona_residencia.id_zona_residencia}
            TablasArray.drop_zona_residencia.push(objeto)

          }
          console.log("zona residencia", data);
           //fin carga  para dropdown
        },
        err => {
          console.log(err);
        }
      );
      
  }
  //FIN LISTADO COMPLETO DE ZONA-RESIDENCIA

  

}
