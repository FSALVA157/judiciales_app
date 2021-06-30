import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoCivilModel } from '../models/estado_civil.model';
import { SexoModel } from '../models/sexo.models';
import { DepartamentoModel } from '../models/departamento.models';

@Injectable({
  providedIn: 'root'
})
export class TablasEscencialesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  //RETORNAR ESTADO-CIVIL TODOS
  getListaEstadoCivilTodos(){
    return this.http.get<EstadoCivilModel[]>(`${environment.BASE_URL}/estado-civil`);
  }
  //FIN RETORNAR ESTADO-CIVIL TODOS

  //RETORNAR DEPARTAMENTOS TODOS
  getListaDepartamentoTodos(){
    return this.http.get<DepartamentoModel[]>(`${environment.BASE_URL}/departamento`);
  }
  //FIN RETORNAR DEPARTAMENTOS TODOS

 //RETORNAR SEXO TODOS
 getListaSexoTodos(){
  return this.http.get<SexoModel[]>(`${environment.BASE_URL}/sexo`);
}
//FIN RETORNAR SEXO TODOS
}
