
export class UsuarioModel{


    constructor(
        public correo:string,
        public clave:string,
        public dni:number,
        public nombre: string,
        public apellido: string,
        public foto?:string

    ){

    }



}