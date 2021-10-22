import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';
import { EstadoCivilService } from '../../../services/estado-civil.service';
import { EstadoCivilModel } from 'src/app/models/estado_civil.model';
import { TablasArray } from '../../../common/tablas-array';

@Component({
  selector: 'app-internos-agregar',
  templateUrl: './internos-agregar.component.html',
  styleUrls: ['../../pages.component.css']
})

export class InternosAgregarComponent implements OnInit {
  submitted = false;
  interno: InternoModel = new InternoModel;
  //lista_estado_civil: EstadoCivilModel[] = []; //array con los objetos estado-civil
  drop_departamento: any[] = []; //array de columnas para dropdown
  drop_establecimiento_procedencia: any[] = []; //array de columnas para dropdown
  drop_estado_civil: any[] = []; //array de columnas para dropdown
  drop_estado_procesal: any[] = []; //array de columnas para dropdown
  drop_jurisdiccion: any[] = []; //array de columnas para dropdown
  drop_juzgado: any[] = []; //array de columnas para dropdown
  drop_nacionalidad: any[] = []; //array de columnas para dropdown
  drop_nariz_forma: any[] = []; //array de columnas para dropdown
  drop_nariz_tamanio: any[] = []; //array de columnas para dropdown
  drop_nivel_educacion: any[] = []; //array de columnas para dropdown
  drop_oficio: any[] = []; //array de columnas para dropdown
  drop_ojos_color: any[] = []; //array de columnas para dropdown
  drop_ojos_tamanio: any[] = []; //array de columnas para dropdown
  drop_pabellon: any[] = []; //array de columnas para dropdown
  drop_pelo_color: any[] = []; //array de columnas para dropdown
  drop_pelo_tipo: any[] = []; //array de columnas para dropdown
  drop_piel: any[] = []; //array de columnas para dropdown
  drop_provincia: any[] = []; //array de columnas para dropdown
  drop_reincidencia: any[] = []; //array de columnas para dropdown
  drop_reingreso: any[] = []; //array de columnas para dropdown
  drop_religion: any[] = []; //array de columnas para dropdown
  drop_sexo: any[] = []; //array de columnas para dropdown
  drop_tipo_condena: any[] = []; //array de columnas para dropdown
  drop_tipo_defensor: any[] = []; //array de columnas para dropdown
  drop_tipo_delito: any[] = []; //array de columnas para dropdown
  drop_zona_residencia: any[] = []; //array de columnas para dropdown
  total:number = 0;

  constructor(
    private fb: FormBuilder,
    private internosService: InternosService,
    private estadoCivilService: EstadoCivilService,
    private router:Router
  ) { 
    
  }
  
  
  //FORMULARIO
  public formData = this.fb.group({
    prontuario: ['3110',[Validators.required,Validators.pattern(/^[0-9]*$/), Validators.min(1), Validators.max(999999)]],
    apellido_1: ['rojas',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    apellido_2: ['',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    nombre_1: ['juan',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_2: ['',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    nombre_3: ['',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    alias: ['no alias',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    dni: ['32505426',[Validators.required,Validators.pattern(/^[0-9]*$/), Validators.min(1000000), Validators.max(99000000)]],
    sexo_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    estado_civil_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    telefono: ['15414',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    domicilio: ['salta barrio',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    departamento_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    provincia_id: ['3',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    zona_residencia_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nacionalidad_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    departamento_nacimiento_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    fecha_nacimiento: ['2000-04-12',[Validators.required]],
    lugar_nacimiento: ['salta capital',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    padre: ['lucas',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    madre: ['lisa',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    parientes: ['rosa',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    referente_emergencia: ['no referente',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    nivel_educacion_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    profesion: ['piscologo',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    ultimo_oficio_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    religion_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    altura: ['25.8',[Validators.required]],
    ojos_color_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    ojos_tamanio_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nariz_tamanio_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nariz_forma_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    pelo_tipo_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    pelo_color_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    piel_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    marca_corporal: ['1',[Validators.required]],
    unidad_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    pabellon_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    establecimiento_procedencia_id: ['1',[Validators.required]],
    reingreso_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    reingreso_num: ['1',[Validators.required]],
    fecha_ingreso: ['2020-04-12',[Validators.required]],
    causa_penal: ['no tiene muchas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    tipo_condena_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    expediente_numero: ['25/458',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    prontuario_policial: ['25-854',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    expediente_policial: ['25-897',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    estado_procesal_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    tipo_delito_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    jurisdiccion_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    reincidencia_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    reincidencia_num: ['1',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    juzgado_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    detenciones: ['en mas de una vez',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
    jurisdiccion_provinicia_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    fecha_detencion: ['2020-04-10',[Validators.required]],
    condena_juzgado_id: ['1',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_anios: ['4',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_meses: ['4',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_dias: ['12',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    computo: ['1',[Validators.required]],
    fecha_cumple: ['2018-04-12',[Validators.required]],
    tipo_defensor_id: ['2',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    abogado: ['Elvio',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]]
  });
  //FIN FORMULARIO

  //CREAR INTERNO
  crearInterno(){
    this.submitted=true;
    if(this.formData.invalid){  
      console.log("formulario con errores", this.formData.get('prontuario')?.value);   
      return;
    
    }
    this.internosService.crearInterno(this.formData.value)    
                          .subscribe(
                            respuesta => {
                              Swal.fire({
                                title: 'Crear Interno',
                                text: "Interno creado correctamente",
                                icon: 'success',
                                
                              });
                              //DIRECCIONAMIENTO
                              this.router.navigateByUrl("dashboard/listar-internos");
                            }, 
                            (err) => {
                              Swal.fire({
                                title: 'Error al crear el interno',
                                text: err.error.message,
                                icon: 'warning',                              
                              })   
                            }
                          );
  }
  //FIN CREAR INTERNO

  
  
  ngOnInit(): void {
    
    //this.listaEstadoCivil();
    this.drop_departamento = TablasArray.drop_departamento;
    this.drop_establecimiento_procedencia = TablasArray.drop_establecimiento_procedencia;
    this.drop_estado_civil = TablasArray.drop_estado_civil;
    this.drop_estado_procesal = TablasArray.drop_estado_procesal;
    this.drop_jurisdiccion = TablasArray.drop_jurisdiccion;
    this.drop_juzgado = TablasArray.drop_juzgado;
    this.drop_nacionalidad = TablasArray.drop_nacionalidad;
    this.drop_nariz_forma = TablasArray.drop_nariz_forma;
    this.drop_nariz_tamanio = TablasArray.drop_nariz_tamanio;
    this.drop_nivel_educacion = TablasArray.drop_nivel_educacion;
    this.drop_oficio = TablasArray.drop_oficio;
    this.drop_ojos_color = TablasArray.drop_ojos_color;
    this.drop_ojos_tamanio = TablasArray.drop_ojos_tamanio;
    this.drop_pabellon = TablasArray.drop_pabellon;
    this.drop_pelo_color = TablasArray.drop_pelo_color;
    this.drop_pelo_tipo  = TablasArray.drop_pelo_tipo;
    this.drop_piel = TablasArray.drop_piel;
    this.drop_provincia = TablasArray.drop_provincia;
    this.drop_reincidencia = TablasArray.drop_reincidencia;
    this.drop_reingreso = TablasArray.drop_reingreso;
    this.drop_religion = TablasArray.drop_religion;
    this.drop_sexo = TablasArray.drop_sexo;
    this.drop_tipo_condena = TablasArray.drop_tipo_condena;
    this.drop_tipo_defensor = TablasArray.drop_tipo_defensor;
    this.drop_tipo_delito = TablasArray.drop_tipo_delito;
    this.drop_zona_residencia = TablasArray.drop_zona_residencia;
    
      

  }

  //VALIDACIONES FORMULARIOS
  //mensajes de validaciones
  interno_validation_messages = {
    //datos
    'prontuario': [
      { type: 'required', message: 'El dni es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' },
      { type: 'min', message: 'El número ingresado es bajo.(minimo: 1).' },
      { type: 'max', message: 'El número ingresado es alto (maximo: 999999).'}
    ],
    'apellido_1': [
      { type: 'required', message: 'El primer apellio es requerido' },
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.' }
    ],
    'apellido_2': [
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'}
    ],
    'nombre_1': [
      { type: 'required', message: 'El primer nombre es requerido.' },
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.' }
    ],
    'nombre_2': [
      { type: 'required', message: 'El segundo nombre es requerido.' },
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'}
    ],
    'nombre_3': [
      { type: 'required', message: 'El tercer nombre es requerido.' },
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'}
    ],    
    'alias': [
      { type: 'required', message: 'El alias es requerido.' },
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'dni': [
      { type: 'required', message: 'El dni es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' },
      { type: 'min', message: 'El número ingresado es bajo.(minimo: 1000000)' },
      { type: 'max', message: 'El número ingresado es alto (maximo: 99000000).'}
    ],
    'sexo_id': [
      { type: 'required', message: 'El sexo es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'estado_civil_id': [
      { type: 'required', message: 'El estado civil es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'telefono': [
      { type: 'required', message: 'El telefono es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'domicilio': [
      { type: 'required', message: 'El domicilio es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'departamento_id': [
      { type: 'required', message: 'El departamenro es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'provincia_id': [
      { type: 'required', message: 'La provincia es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'zona_residencia_id': [
      { type: 'required', message: 'La zona de residencia es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'nacionalidad_id': [
      { type: 'required', message: 'La nacionalidad es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'departamento_nacimiento_id': [
      { type: 'required', message: 'El departamento de nacimiento es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'fecha_nacimiento': [
      { type: 'required', message: 'La fecha de nacimiento es requerida.' }
    ],
    'lugar_nacimiento': [
      { type: 'required', message: 'El lugar de nacimiento es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'padre': [
      { type: 'required', message: 'El padre es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'madre': [
      { type: 'required', message: 'La madre es requerida.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'parientes': [
      { type: 'required', message: 'El pariente es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'referente_emergencia': [
      { type: 'required', message: 'El referente de emergencia es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'nivel_educacion_id': [
      { type: 'required', message: 'El nivel de eduacion es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'profesion': [
      { type: 'required', message: 'La profesion es requerida.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'ultimo_oficio_id': [
      { type: 'required', message: 'El ultimo oficio es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'religion_id': [
      { type: 'required', message: 'La religion es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'altura': [
      { type: 'required', message: 'La altura es requerida.' }
    ],
    'destino_id': [
      { type: 'required', message: 'El destino es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'ojos_color_id': [
      { type: 'required', message: 'El color de ojos es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'ojos_tamanio_id': [
      { type: 'required', message: 'El tamaño de ojos es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'nariz_tamanio_id': [
      { type: 'required', message: 'El tamaño de nariz es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'nariz_forma_id': [
      { type: 'required', message: 'La forma de nariz es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'pelo_tipo_id': [
      { type: 'required', message: 'El tipo de pelo es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'pelo_color_id': [
      { type: 'required', message: 'El color de pelo es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'piel_id': [
      { type: 'required', message: 'La piel es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'marca_corporal': [
      { type: 'required', message: 'La division es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'unidad_id': [
      { type: 'required', message: 'La unidad es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'pabellon_id': [
      { type: 'required', message: 'El pabellon es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'establecimiento_procedencia_id': [
      { type: 'required', message: 'El establecimiento de procedencia es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'reingreso_id': [
      { type: 'required', message: 'El reingreso es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'reingreso_num': [
      { type: 'required', message: 'El numero de reingreso es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'fecha_ingreso': [
      { type: 'required', message: 'La fecha de ingreso es requerida.'}
    ],
    'causa_penal': [
      { type: 'required', message: 'La causa penal es requerida.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'tipo_condena_id': [
      { type: 'required', message: 'El tipo de condena es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'expediente_numero': [
      { type: 'required', message: 'El numero de expediente es requerido.'},
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'prontuario_policial': [
      { type: 'required', message: 'El prontuario policial es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'expediente_policial': [
      { type: 'required', message: 'El expediente policial es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'}  
    ],
    'estado_procesal_id': [
      { type: 'required', message: 'El estado procesal es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'tipo_delito_id': [
      { type: 'required', message: 'El tipo de delito es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'jurisdiccion_id': [
      { type: 'required', message: 'La jurisdiccion es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'reincidencia_id': [
      { type: 'required', message: 'La reincidencia es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'reincidencia_num': [
      { type: 'required', message: 'El numero de reincidencia es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'juzgado_id': [
      { type: 'required', message: 'El juzgado es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'detenciones': [
      { type: 'required', message: ' la detencion es requerida.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],
    'jurisdiccion_provinicia_id': [
      { type: 'required', message: 'La jurisdiccion provincial es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'fecha_detencion': [
      { type: 'required', message: 'La fecha de detencion es requerida..'}
    ],
    'condena_juzgado_id': [
      { type: 'required', message: 'El juzgado que condena es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'total_anios': [
      { type: 'required', message: 'El total de años es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'total_meses': [
      { type: 'required', message: 'El total de meses es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'total_dias': [
      { type: 'required', message: 'El total de dias es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'computo': [
      { type: 'required', message: 'El computo es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'fecha_cumple': [
      { type: 'required', message: 'El destino es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'tipo_defensor_id': [
      { type: 'required', message: 'El tipo de defensor es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'abogado': [
      { type: 'required', message: ' El abogado es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ]

  }  
  //Fin mensajes de validaciones..........................................

  //validacion de formulario data
  get prontuarioNoValido(){
    return this.formData.get('prontuario')?.invalid && this.formData.get('prontuario')?.touched;
  }
  get apellido1NoValido(){
    return this.formData.get('apellido_1')?.invalid && this.formData.get('apellido_1')?.touched;
  }

  get apellido2NoValido(){
    return this.formData.get('apellido_2')?.invalid && this.formData.get('apellido_2')?.touched;
  }

  get nombre1NoValido(){
    return this.formData.get('nombre_1')?.invalid && this.formData.get('nombre_1')?.touched;
  }  
  get nombre2NoValido(){
    return this.formData.get('nombre_2')?.invalid && this.formData.get('nombre_2')?.touched;
  }  
  get nombre3NoValido(){
    return this.formData.get('nombre_3')?.invalid && this.formData.get('nombre_3')?.touched;
  }  

  get aliasNoValido(){    
    return this.formData.get('alias')?.invalid && this.formData.get('alias')?.touched;
  }

  get dniNoValido(){    
    return this.formData.get('dni')?.invalid && this.formData.get('dni')?.touched;
  }

  get sexoNoValido(){
    return this.formData.get('sexo_id')?.invalid && this.formData .get('sexo_id')?.touched;
  }

  get estadoCivilNoValido(){
    return this.formData.get('estado_civil_id')?.invalid && this.formData.get('estado_civil_id')?.touched;
  }
  get telefonoNoValido(){
    return this.formData.get('telefono')?.invalid && this.formData.get('telefono')?.touched;
  }

  get domicilioNoValido(){
    return this.formData.get('domicilio')?.invalid && this.formData.get('domicilio')?.touched;
  }

  get departamentoNoValido(){
    return this.formData.get('departamento_id')?.invalid && this.formData.get('departamento_id')?.touched;
  }  
  get provinciaNoValido(){
    return this.formData.get('provincia_id')?.invalid && this.formData.get('provincia_id')?.touched;
  }  
  get zonaResidenciaNoValido(){
    return this.formData.get('zona_residencia_id')?.invalid && this.formData.get('zona_residencia_id')?.touched;
  }  

  get nacionalidadNoValido(){    
    return this.formData.get('nacionalidad_id')?.invalid && this.formData.get('nacionalidad_id')?.touched;
  }

  get departamentoNacimientoNoValido(){    
    return this.formData.get('departamento_nacimiento_id')?.invalid && this.formData.get('departamento_nacimiento_id')?.touched;
  }

  get fechaNacimientoNoValido(){
    return this.formData.get('fecha_nacimiento')?.invalid && this.formData .get('fecha_nacimiento')?.touched;
  }

  get lugarNacimientoNoValido(){
    return this.formData.get('lugar_nacimiento')?.invalid && this.formData.get('lugar_nacimiento')?.touched;
  }
  get padreNoValido(){
    return this.formData.get('padre')?.invalid && this.formData.get('padre')?.touched;
  }

  get madreNoValido(){
    return this.formData.get('madre')?.invalid && this.formData.get('madre')?.touched;
  }

  get parientesNoValido(){
    return this.formData.get('parientes')?.invalid && this.formData.get('parientes')?.touched;
  }  
  get referenteEmergenciaNoValido(){
    return this.formData.get('referente_emergencia')?.invalid && this.formData.get('referente_emergencia')?.touched;
  }  
  get nivelEducacionNoValido(){
    return this.formData.get('nombre_3')?.invalid && this.formData.get('nombre_3')?.touched;
  }  

  get profesionNoValido(){    
    return this.formData.get('profesion')?.invalid && this.formData.get('profesion')?.touched;
  }

  get ultimoOficioNoValido(){    
    return this.formData.get('dni')?.invalid && this.formData.get('dni')?.touched;
  }

  get religionNoValido(){
    return this.formData.get('religion_id')?.invalid && this.formData .get('religion_id')?.touched;
  }

  get alturaNoValido(){
    return this.formData.get('altura')?.invalid && this.formData.get('altura')?.touched;
  }
  get destinoNoValido(){
    return this.formData.get('destino_id')?.invalid && this.formData.get('destino_id')?.touched;
  }

  get ojosColorNoValido(){
    return this.formData.get('ojos_color_id')?.invalid && this.formData.get('ojos_color_id')?.touched;
  }

  get ojosTamanioNoValido(){
    return this.formData.get('ojos_tamanio_id')?.invalid && this.formData.get('ojos_tamanio_id')?.touched;
  }  
  get narizTamanioNoValido(){
    return this.formData.get('nariz_tamanio_id')?.invalid && this.formData.get('nariz_tamanio_id')?.touched;
  }  
  get narizFormaNoValido(){
    return this.formData.get('nariz_forma_id')?.invalid && this.formData.get('nariz_forma_id')?.touched;
  }  

  get peloTipoNoValido(){    
    return this.formData.get('pelo_tipo_id')?.invalid && this.formData.get('pelo_tipo_id')?.touched;
  }

  get peloColorNoValido(){    
    return this.formData.get('dni')?.invalid && this.formData.get('dni')?.touched;
  }

  get pielNoValido(){
    return this.formData.get('piel_id')?.invalid && this.formData .get('piel_id')?.touched;
  }

  get marcaCorporalNoValido(){
    return this.formData.get('marca_corporal')?.invalid && this.formData.get('marca_corporal')?.touched;
  }
  get unidadNoValido(){
    return this.formData.get('unidad_id')?.invalid && this.formData.get('unidad_id')?.touched;
  }

  get pabellonNoValido(){
    return this.formData.get('pabellon_id')?.invalid && this.formData.get('pabellon_id')?.touched;
  }

  get establecimientoProcedenciaNoValido(){
    return this.formData.get('establecimiento_procedencia_id')?.invalid && this.formData.get('establecimiento_procedencia_id')?.touched;
  }  
  get reingresoNoValido(){
    return this.formData.get('reingreso_id')?.invalid && this.formData.get('reingreso_id')?.touched;
  }  
  get reingreso_numNoValido(){
    return this.formData.get('reingreso_num')?.invalid && this.formData.get('reingreso_num')?.touched;
  }  

  get fechaIngresoNoValido(){    
    return this.formData.get('fecha_ingreso')?.invalid && this.formData.get('fecha_ingreso')?.touched;
  }

  get causaPenalNoValido(){    
    return this.formData.get('causa_penal')?.invalid && this.formData.get('causa_penal')?.touched;
  }

  get tipoCondenaNoValido(){
    return this.formData.get('tipo_condena_id')?.invalid && this.formData .get('tipo_condena_id')?.touched;
  }

  get expedienteNumeroNoValido(){
    return this.formData.get('expediente_numero')?.invalid && this.formData.get('expediente_numero')?.touched;
  }
  get prontuarioPolicialNoValido(){
    return this.formData.get('prontuario_policial')?.invalid && this.formData.get('prontuario_policial')?.touched;
  }

  get expedientePolicialNoValido(){
    return this.formData.get('expediente_policial')?.invalid && this.formData.get('expediente_policial')?.touched;
  }

  get estadoProcesalNoValido(){
    return this.formData.get('estado_procesal_id')?.invalid && this.formData.get('estado_procesal_id')?.touched;
  }  
  get tipoDelitoNoValido(){
    return this.formData.get('tipo_delito_id')?.invalid && this.formData.get('tipo_delito_id')?.touched;
  }  
  get jurisdiccionNoValido(){
    return this.formData.get('jurisdiccion_id')?.invalid && this.formData.get('jurisdiccion_id')?.touched;
  }  

  get reincidenciaNoValido(){    
    return this.formData.get('reincidencia_id')?.invalid && this.formData.get('reincidencia_id')?.touched;
  }

  get reincidenciaNumNoValido(){    
    return this.formData.get('reincidencia_num')?.invalid && this.formData.get('reincidencia_num')?.touched;
  }

  get juzgadoNoValido(){
    return this.formData.get('juzgado_id')?.invalid && this.formData .get('juzgado_id')?.touched;
  }

  get detencionesNoValido(){
    return this.formData.get('detenciones')?.invalid && this.formData.get('detenciones')?.touched;
  }
  get jurisdiccionProviniciaNoValido(){
    return this.formData.get('jurisdiccion_provinicia_id')?.invalid && this.formData.get('jurisdiccion_provinicia_id')?.touched;
  }

  get fechaDetencionNoValido(){
    return this.formData.get('madre')?.invalid && this.formData.get('madre')?.touched;
  }

  get condenaJuzgadoNoValido(){
    return this.formData.get('condena_juzgado_id')?.invalid && this.formData.get('condena_juzgado_id')?.touched;
  }  
  get totalAniosNoValido(){
    return this.formData.get('total_anios')?.invalid && this.formData.get('total_anios')?.touched;
  }  
  get totalMesesNoValido(){
    return this.formData.get('total_meses')?.invalid && this.formData.get('total_meses')?.touched;
  }  

  get totalDiasNoValido(){
    return this.formData.get('total_dias')?.invalid && this.formData.get('total_dias')?.touched;
  }
  get computoNoValido(){
    return this.formData.get('computo')?.invalid && this.formData.get('computo')?.touched;
  }

  get fechaCumpleNoValido(){
    return this.formData.get('fecha_cumple')?.invalid && this.formData.get('fecha_cumple')?.touched;
  }

  get tipoDefensorNoValido(){
    return this.formData.get('tipo_defensor_id')?.invalid && this.formData.get('tipo_defensor_id')?.touched;
  }  
  get abogadoNoValido(){
    return this.formData.get('abogado')?.invalid && this.formData.get('abogado')?.touched;
  }  
  //fin validacion formulario data........................................
  //FIN VALIDACIONES FORMULARIOS..........................................

}
