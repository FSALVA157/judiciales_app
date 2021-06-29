import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoCivilModel } from '../models/estado_civil.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {

  constructor(    
    private readonly http: HttpClient
  ) { }

  //RETORNAR ESTADO-CIVIL TODOS
  getListaEstadoCivilTodos(){
     return this.http.get<EstadoCivilModel[]>(`${environment.BASE_URL}/estado-civil`);
  }
  //FIN RETORNAR ESTADO-CIVIL TODOS



}
