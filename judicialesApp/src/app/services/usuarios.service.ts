import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private readonly http: HttpClient
  ) { }
  
  //CREAR USUARIO
  crearUsuario(data: any){
    console.log("datos de formulario", data);
    delete data.password2;
    const obj: UsuarioModel = {
      correo: data.correo,
      nombre: data.nombre,
      apellido: data.apellido,
      clave: data.clave,
      dni: parseInt(data.dni),
      unidad_id: 1,
      fotoUrl: data.foto
    };
    
    return this.http.post(`${environment.BASE_URL}/usuario`,obj);    
  }
  //fin CREAR USUARIO
  
  //LOGIN
  login(data: any){
    //delete data.recuerdame;
    const dataLogin = {
      'email': data.correo,
      'clave': data.clave
    };
    console.log("usuario logueado en servicio", this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin));
    return this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin);
  }
  //FIN LOGIN

  //RETORNAR USUARIOS POR UNIDAD
  getListaUsuariosXUnidad(id_unidad: number){
    
    return this.http.get<UsuarioModel[]>(`${environment.BASE_URL}/usuario/buscar-por-unidad?id_unidad=${id_unidad}`);
  }

}
