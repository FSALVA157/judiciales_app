
import { environment } from "src/environments/environment";

const base_url = environment.BASE_URL;

export class PlanillaInternoModel {
    
    public status!: string;
    public prontuario!: number;
    public fecha_hoy!: Date;
    public estado_procesal!: string;
    public nombre_completo!: string;
    public nacionalidad!: string;
    public fecha_nacimiento!: Date;
    public lugar_nacimiento!: string;
    public dni!: number;    
    public prontuario_policial!: string;
    public fecha_detencion!: Date;
    public fecha_ingreso!: Date;
    public procedente!: string;
    public num_expediente!: string; 
    public causa!: string;
    public tribunal_condena!: string;
    public anios_condena!: number;
    public meses_condena!: number;  
    public dias_condena!: number;
    public anios_lleva!: number;
    public meses_lleva!: number;
    public dias_lleva!: number;
    public anios_falta!: number;
    public meses_falta!: number;
    public dias_falta!: number;
    public fecha_cumple!: Date;
    public tipificacion_pena!: string;
    

    constructor(){}

    // get fotoUrl():string{

       
    //     if(this.foto_frente){
    //         console.log("fotoUrl en interno model",`${base_url}/interno/foto?foto_nombre=${this.foto_frente}`);
    //         return `${base_url}/interno/foto?foto_nombre=${this.foto_frente}`;
    //     }else{
    //         console.log("fotoUrl en interno model",`${base_url}/interno/foto?foto_nombre=no-image.jpg`);
    //         return `${base_url}/interno/foto?foto_nombre=no-image.jpg`;
    //     }
    // }
 
   
}