import { NumberSymbol } from "@angular/common";
import { environment } from "src/environments/environment";

const base_url = environment.BASE_URL;


export class UsuarioModel{
    
    constructor(
        public id_usuario:number,
        public correo:string,
        public clave:string,
        public dni:number,
        public nombre: string,
        public apellido: string,
        //public unidad: number,
        public role: string,
        public unidad_id: number,
        public foto?:string        

    ){}

    get fotoUrl(){
        if(this.foto){
            return `${base_url}/usuario/foto?foto_nombre=${this.foto}`;
        }else{
            return `${base_url}/usuario/foto?foto_nombre=no-image.jpg`;
        }
    }
    



}