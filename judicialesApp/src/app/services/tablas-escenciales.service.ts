import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoCivilModel } from '../models/estado_civil.model';
import { SexoModel } from '../models/sexo.model';
import { DepartamentoModel } from '../models/departamento.model';
import { ZonaResidenciaModel } from '../models/zona-residencia.model';
import { NacionalidadModel } from '../models/nacionalidad.model';
import { EstablecimientoProcedenciaModel } from '../models/establecimiento-procedencia.model';
import { EstadoProcesalModel } from '../models/estado-procesal.model';
import { JurisdiccionModel } from '../models/jurisdiccion.model';
import { JuzgadoModel } from '../models/juzgado.model';
import { NarizFormaModel } from '../models/nariz-forma.model';
import { NarizTamanioModel } from '../models/nariz-tamanio.model';
import { NivelEducacionModel } from '../models/nivel-educacion.model';
import { OficioModel } from '../models/oficio.model';
import { OjosColorModel } from '../models/ojos-color.model';
import { OjosTamanioModel } from '../models/ojos-tamanio.model';

@Injectable({
  providedIn: 'root'
})
export class TablasEscencialesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  //RETORNAR DEPARTAMENTOS TODOS
  getListaDepartamentoTodos(){
    return this.http.get<DepartamentoModel[]>(`${environment.BASE_URL}/departamento`);
  }
  //FIN RETORNAR DEPARTAMENTOS TODOS

  //RETORNAR ESTABLECIMIENTO-PROCEDENCIA TODOS
  getListaEstablecimientoProcedenciaTodos(){
    return this.http.get<EstablecimientoProcedenciaModel[]>(`${environment.BASE_URL}/establecimiento-procedencia`);
  }
  //FIN RETORNAR ESTABLECIMIENTO-PROCEDENCIA TODOS
  
  //RETORNAR ESTADO-CIVIL TODOS
  getListaEstadoCivilTodos(){
    return this.http.get<EstadoCivilModel[]>(`${environment.BASE_URL}/estado-civil`);
  }
  //FIN RETORNAR ESTADO-CIVIL TODOS

  //RETORNAR ESTADO-PROCESAL TODOS
  getListaEstadoProcesalTodos(){
    return this.http.get<EstadoProcesalModel[]>(`${environment.BASE_URL}/estado-procesal`);
  }
  //FIN RETORNAR ESTADO-PROCESAL TODOS

  //RETORNAR JURISDICCION TODOS
  getListaJurisdiccionTodos(){
    return this.http.get<JurisdiccionModel[]>(`${environment.BASE_URL}/jurisdiccion`);
  }
  //FIN RETORNAR JURISDICCION TODOS

  //RETORNAR JUZGADO TODOS
  getListaJuzgadoTodos(){
    return this.http.get<JuzgadoModel[]>(`${environment.BASE_URL}/juzgado`);
  }
  //FIN RETORNAR JUZGADO TODOS

  //RETORNAR NACIONALIDAD TODOS
  getListaNacionalidadTodos(){
    return this.http.get<NacionalidadModel[]>(`${environment.BASE_URL}/nacionalidad`);
  }
  //FIN RETORNAR NACIONALIDAD TODOS


  //RETORNAR NARIZ-FORM TODOS
  getListaNarizFormaTodos(){
    return this.http.get<NarizFormaModel[]>(`${environment.BASE_URL}/nariz-forma`);
  }
  //FIN RETORNAR NARIZ-FORM TODOS

  //RETORNAR NARIZ-TAMANIO TODOS
  getListaNarizTamanio(){
    return this.http.get<NarizTamanioModel[]>(`${environment.BASE_URL}/nariz-tamanio`);
  }
  //FIN RETORNAR NARIZ-TAMANIO TODOS

  //RETORNAR NIVEL-EDUCACION TODOS
  getListaNivelEducacionTodos(){
    return this.http.get<NivelEducacionModel[]>(`${environment.BASE_URL}/nivel-educacion`);
  }
  //FIN RETORNAR NIVEL-EDUCACION TODOS

  //RETORNAR OFICIO TODOS
  getListaOficioTodos(){
    return this.http.get<OficioModel[]>(`${environment.BASE_URL}/oficio`);
  }
  //FIN RETORNAR OFICIO TODOS

  //RETORNAR OJOS-COLOR TODOS
  getListaOjosColorTodos(){
    return this.http.get<OjosColorModel[]>(`${environment.BASE_URL}/ojos-color`);
  }
  //FIN RETORNAR OJOS-COLOR TODOS

  //RETORNAR OJOS-TAMANIO TODOS
  getListaOjosTamanioTodos(){
    return this.http.get<OjosTamanioModel[]>(`${environment.BASE_URL}/ojos-tamanio`);
  }
  //FIN RETORNAR OJOS-TAMANIO TODOS


  //RETORNAR SEXO TODOS
  getListaSexoTodos(){
    return this.http.get<SexoModel[]>(`${environment.BASE_URL}/sexo`);
  }
  //FIN RETORNAR SEXO TODOS
  
  //RETORNAR ZONA-RESIDENCIA TODOS
  getListaZonaResidenciaTodos(){
    return this.http.get<ZonaResidenciaModel[]>(`${environment.BASE_URL}/zona-residencia`);
  }
  //FIN RETORNAR ZONA-RESIDENCIA TODOS
}
