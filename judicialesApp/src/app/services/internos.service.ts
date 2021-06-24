import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InternoModel } from '../models/interno.model';

@Injectable({
  providedIn: 'root'
})
export class InternosService {

  constructor(
    private readonly http: HttpClient
  ) { }

  //RETORNAR USUARIOS POR UNIDAD
  getListaInternosXUnidad(id_unidad: number){
    
    return this.http.get<InternoModel[]>(`${environment.BASE_URL}/usuario/buscar-por-unidad?id_unidad=${id_unidad}`);
  }
  //FIN RETORNAR USUARIOS POR UNIDAD
  //RETORNAR INTERNOS POR UNIDAD
  getListaInternosTodos(){
    
    return this.http.get<[internos: InternoModel[], total: number]>(`${environment.BASE_URL}/interno`);
  }
  //FIN RETORNAR USUARIOS POR UNIDAD

  //CREAR INTERNO
  crearInterno(data: any){
    console.log("datos de formulario", data);
    // delete data.password2;
    // const interno: InternoModel = {
    //   prontuario: data.prontuario,
    //   nombre: data.nombre,
    //   apellido: data.apellido,
    //   clave: data.clave,
    //   dni: parseInt(data.dni),
    //   unidad_id: globalConstants.unidad
    //};
    
    return this.http.post(`${environment.BASE_URL}/usuario`,data);    
  }
  //fin CREAR INTERNO
}
