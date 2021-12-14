import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.BASE_URL



@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(
    private http: HttpClient
  ) { }

  async actualizarFotoUsuario(archivo: File, id: number){
    // const url = `${base_url}/usuarios/foto?id=${id}`;
    // const formData = new FormData();
    // formData.append('foto', archivo);
    // return this.http.post(url, formData);
      try {
        const url = `${base_url}/usuario/foto?id=${id}`;
        console.log("ruta", url);
        const formData = new FormData();
        formData.append('foto_carga', archivo);
        const respuesta = await fetch(url,{
          method: "POST",
          body: formData
        });
        if(!respuesta.ok){
          throw new Error('Error en la Actualización de la Foto del Usuario');
        }
        return respuesta;
                
      } catch (error) {
             return error
      }
  }


  async actualizarFotoInterno(archivo: File, prontuario: number){
    // const url = `${base_url}/usuarios/foto?id=${id}`;
    // const formData = new FormData();
    // formData.append('foto', archivo);
    // return this.http.post(url, formData);
      try {
        const url = `${base_url}/interno/foto?prontuario=${prontuario}`;
        console.log("id", prontuario);
        console.log("ruta", url);
        const formData = new FormData();
        formData.append('foto_carga', archivo);
        const respuesta = await fetch(url,{
          method: "POST",
          body: formData
        });
        if(!respuesta.ok){
          throw new Error('Error en la Actualización de la Foto del Interno');
        }
        return respuesta;
                
      } catch (error) {
             return error
      }
  }
}
