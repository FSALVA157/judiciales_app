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
  
  //crear usuario
  crearUsuario(data: any){
    delete data.password2;
    const obj: UsuarioModel = {
      correo: data.correo,
      nombre: data.nombre,
      apellido: data.apellido,
      clave: data.clave,
      dni: parseInt(data.dni)
    };
    
    return this.http.post(`${environment.BASE_URL}/usuario`,obj);
    
  }
  //fin crear usuario
  
  login(data: any){
    delete data.recuerdame;
    const dataLogin = {
      'email': data.correo,
      'clave': data.clave
    };
    console.log('DATA ARMADA', dataLogin);
    return this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin);

  }
}
