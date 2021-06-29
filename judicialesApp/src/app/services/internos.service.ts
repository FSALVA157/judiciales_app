import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { globalConstants } from '../common/global-constants';
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

  //RETORNAR INTERNOS TODOS
  getListaInternosTodos(){
    
    return this.http.get<[internos: InternoModel[], total: number]>(`${environment.BASE_URL}/interno`);
  }
  //FIN RETORNAR TODOS

  //CREAR INTERNO
  crearInterno(data: any){
    console.log("datos de formulario", data);
    // delete data.password2;
    const interno: InternoModel = {
      prontuario: parseInt(data.prontuario),
    apellido_1: data.apellido_1,
    apellido_2: data.apellido_2,
    nombre_1: data.nombre_1,
    nombre_2: data.nombre_2,
    nombre_3: data.nombre_3,
    alias: data.alias,
    dni: parseInt(data.dni),
    sexo_id: parseInt(data.sexo_id),
    estado_civil_id: parseInt(data.estado_civil_id),
    telefono: data.telefono,
    domicilio: data.domicilio,
    departamento_id: parseInt(data.departamento_id),
    zona_residencia_id: parseInt(data.zona_residencia_id),
    nacionalidad_id: parseInt(data.nacionalidad_id),
    departamento_nacimiento_id: parseInt(data.departamento_nacimiento_id),
    fecha_nacimiento: data.fecha_nacimiento,
    lugar_nacimiento: data.lugar_nacimiento,
    padre: data.padre,
    madre: data.madre,
    parientes: data.parientes,
    referente_emergencia: data.referente_emergencia,
    nivel_educacion_id: parseInt(data.nivel_educacion_id),
    profesion: data.profesion,
    ultimo_oficio_id: parseInt(data.ultimo_oficio_id),
    religion_id: parseInt(data.religion_id),
    talla: data.talla,
    ojos_color_id: parseInt(data.ojos_color_id),
    ojos_tamanio_id: parseInt(data.ojos_tamanio_id),
    nariz_tamanio_id: parseInt(data.nariz_tamanio_id),
    nariz_forma_id: parseInt(data.nariz_forma_id),
    pelo_tipo_id: parseInt(data.pelo_tipo_id),
    pelo_color_id: parseInt(data.pelo_color_id),
    piel_id: parseInt(data.piel_id),
    marca_corporal: parseInt(data.marca_corporal),
    pabellon_id: parseInt(data.pabellon_id),
    establecimiento_procedencia_id: parseInt(data.establecimiento_procedencia_id),
    reingreso_id: parseInt(data.reingreso_id),
    reingreso_num: parseInt(data.reingreso_num),
    fecha_ingreso: data.fecha_ingreso,
    causa_penal: data.causa_penal,
    tipo_condena_id: parseInt(data.tipo_condena_id),
    expediente_numero: data.expediente_numero,
    prontuario_policial: data.prontuario_policial,
    expediente_policial: data.expediente_policial,
    estado_procesal_id: parseInt(data.estado_procesal_id),
    tipo_delito_id: parseInt(data.tipo_delito_id),
    jurisdiccion_id: parseInt(data.jurisdiccion_id),
    reincidencia_id: parseInt(data.reincidencia_id),
    reincidencia_num: parseInt(data.reincidencia_num),
    juzgado_id: parseInt(data.juzgado_id),
    detenciones: data.detenciones,
    jurisdiccion_provinicia_id: parseInt(data.jurisdiccion_provinicia_id),
    fecha_detencion: data.fecha_detencion,
    condena_juzgado_id: parseInt(data.condena_juzgado_id),
    total_anios: parseInt(data.total_anios),
    total_meses: parseInt(data.total_meses),
    total_dias: parseInt(data.total_dias),
    computo: parseInt(data.computo),
    fecha_cumple: data.fecha_cumple,
    tipo_defensor_id: parseInt(data.tipo_defensor_id),
    abogado: data.abogado,     
    unidad_id: globalConstants.unidad
    };
    
    return this.http.post(`${environment.BASE_URL}/interno`,interno);    
  }
  //fin CREAR INTERNO
}
