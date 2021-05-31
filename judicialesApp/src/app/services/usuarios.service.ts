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
    delete data.password2;
    // const obj: UsuarioModel = {
    //   correo: data.correo,
    //   nombre: data.nombre,
    //   apellido: data.apellido,
    //   clave: data.clave,
    //   dni: parseInt(data.dni),
    //   fotoUrl: data.
    // };
    
    return this.http.post(`${environment.BASE_URL}/usuario`,data);    
  }
  //fin CREAR USUARIO
  
  //LOGIN
  login(data: any){
    //delete data.recuerdame;
    const dataLogin = {
      'email': data.correo,
      'clave': data.clave
    };
    console.log("usuario en servicio", this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin));
    return this.http.post(`${environment.BASE_URL}/auth/login`,dataLogin);
  }
  //FIN LOGIN

}
