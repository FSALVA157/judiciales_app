import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TablasArray } from 'src/app/common/tablas-array';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

const base_url = environment.BASE_URL;

@Component({
  selector: 'app-internos-editar',
  templateUrl: './internos-editar.component.html',
  styleUrls: ['../../pages.component.css']
})
export class InternosEditarComponent implements OnInit {

  
  id:number = 0;
  interno: InternoModel= new InternoModel;
  fotoSubir: File | undefined;//variable para guardar la imagen
  imagenUrl: string ="";
  submitted = false;

  //array para obtener las tablas
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
    private router:Router,
    private routeActivate: ActivatedRoute,
    private readonly fileUploadService: FileUploadService
  ) { }


  //creacion de formulario de datos para html
  formData = this.fb.group({
    prontuario: ['',[Validators.required,Validators.pattern(/^[0-9]*$/), Validators.min(1), Validators.max(999999)]],
    apellido_1: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    apellido_2: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    nombre_1: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    nombre_2: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    nombre_3: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    alias: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(2), Validators.maxLength(50)]],
    dni: ['',[Validators.required,Validators.pattern(/^[0-9]*$/), Validators.min(1000000), Validators.max(99000000)]],
    sexo_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    estado_civil_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    telefono: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    domicilio: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    provincia_id: ['3',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    departamento_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    zona_residencia_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nacionalidad_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    departamento_nacimiento_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    fecha_nacimiento: ['',[Validators.required]],
    lugar_nacimiento: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    padre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    madre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    parientes: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    referente_emergencia: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    nivel_educacion_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    profesion: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    ultimo_oficio_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    religion_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    altura: ['',[Validators.required]],
    ojos_color_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    ojos_tamanio_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nariz_tamanio_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nariz_forma_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    pelo_tipo_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    pelo_color_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    piel_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    marca_corporal: ['',[Validators.required]],
    unidad_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    prontuario_policial: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    establecimiento_procedencia_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    fecha_ingreso: ['',[Validators.required]],
    pabellon_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    //pabellon_id: ['',[Validators.required]],    
    //reingreso_id: ['',[Validators.required]],
    //reingreso_num: ['',[Validators.required]],    
    //causa_penal: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    //tipo_condena_id: ['',[Validators.required]],
    //expediente_numero: ['',[Validators.required]],    
    //expediente_policial: ['',[Validators.required]],
    //estado_procesal_id: ['',[Validators.required]],
    //tipo_delito_id: ['',[Validators.required]],    
    //reincidencia_id: ['',[Validators.required]],
    //reincidencia_num: ['',[Validators.required]],
    //juzgado_id: ['',[Validators.required]],
    //detenciones: ['',[Validators.required]],
    //jurisdiccion_id: ['',[Validators.required]],
    //jurisdiccion_provinicia_id: ['',[Validators.required]],
    //fecha_detencion: ['',[Validators.required]],
    //condena_juzgado_id: ['',[Validators.required]],
    //total_anios: ['',[Validators.required]],
    //total_meses: ['',[Validators.required]],
    //total_dias: ['',[Validators.required]],
    //computo: ['',[Validators.required]],
    //fecha_cumple: ['',[Validators.required]],
    //tipo_defensor_id: ['',[Validators.required]],
    //abogado: ['',[Validators.required]]

  });
  //... fin creacion de formulario de datos para html

  //creacion de formulario de datos procesales para html
  formDataProcesales = this.fb.group({        
    
    reingreso_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    reingreso_num: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    causa_penal: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    tipo_condena_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    expediente_numero: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    expediente_policial: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    estado_procesal_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    tipo_delito_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],    
    reincidencia_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    reincidencia_num: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    juzgado_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    detenciones: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    jurisdiccion1_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    jurisdiccion2_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    jurisdiccion_provincia_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    fecha_detencion: ['',[Validators.required]],
    condena_juzgado_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_anios: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_meses: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    total_dias: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    computo: ['',[Validators.required]],
    fecha_cumple: ['',[Validators.required]],
    tipo_defensor_id: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    abogado: ['',[Validators.required,  Validators.pattern(/^[A-Za-z\s]+$/),Validators.minLength(2), Validators.maxLength(50)]]
  });
  //... fin creacion de formulario de datos procesales para html


  ngOnInit(): void {

    //metodo local para obtener los datos de las tablas satelite
    this.obtenerDatosTablas()

    //recuperar id del usuario que biene de la tabla
    this.id = this.routeActivate.snapshot.params['id'];
    
    //busqueda de usuario y carga de datos en el formulario    
    this.internosService.getInternoXId(this.id)
                .pipe(first())
                .subscribe(x =>{ 
                  this.formData.patchValue(x);
                  this.formDataProcesales.patchValue(x);
                  //METODO LOCAL PARA COLOCAR DATOS DE USUARIO DEVUELTO EN VARIABLES
                  this.extraerDataInterno(x);
                });
  }


  //METODO ACTUALIZA EL INTERNO
  actualizarInterno() {       

    this.submitted=true; //establecer que se envio el formulario
    //controlar si el formulario es valido
    if(this.formData.invalid){     
      Swal.fire('Formulario con errores','Complete correctamente todos los campos del formulario',"warning");
      return Object.values(this.formData.controls).forEach(control => control.markAsTouched());
      

    }
    //fin controlar si el formulario es valido

    this.internosService.actualizarDatosInterno(this.id, this.formData.value)
        .pipe(first())
        .subscribe(
          respuesta => {
            Swal.fire({
              title: 'Actualizar Interno',
              text: "Interno actualizado correctamente",
              icon: 'success',              
            });
            //DIRECCIONAMIENTO
            //this.router.navigateByUrl("dashboard/listar-usuarios");
          }, 
          (err) => {
            Swal.fire({
              title: 'Error al actualizar interno',
              text: err.error.message,
              icon: 'warning',                              
            })   
          }
      );
  }
  //FIN METODO ACTUALIZA EL INTERNO
  //-------------------------------

  //METODO ACTUALIZA DATOS PROCESALES DEL INTERNO
  actualizarDatosProcesalesInterno() {       

    this.submitted=true; //establecer que se envio el formulario
    //controlar si el formulario es valido
    if(this.formDataProcesales.invalid){     
      Swal.fire('Formulario con errores','Complete correctamente todos los campos del formulario',"warning");
      return Object.values(this.formData.controls).forEach(control => control.markAsTouched());

    }
    //fin controlar si el formulario es valido

    this.internosService.actualizarDatosProcesalesInterno(this.id, this.formDataProcesales.value)
        .pipe(first())
        .subscribe(
          respuesta => {
            Swal.fire({
              title: 'Actualizar Interno',
              text: "Interno actualizado correctamente",
              icon: 'success',              
            });
            //DIRECCIONAMIENTO
            //this.router.navigateByUrl("dashboard/listar-usuarios");
          }, 
          (err) => {
            Swal.fire({
              title: 'Error al actualizar interno',
              text: err.error.message,
              icon: 'warning',                              
            })   
          }
      );
  }
  //FIN METODO ACTUALIZA DATOS PROCESALES DEL INTERNO
  //------------------------------------------------


  //EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  extraerDataInterno(data: any) {
    //voy a desestructurar respuesta
          
     this.interno = data;      
     
     //extraer foto de interno
     if(this.interno.foto_frente){
      this.imagenUrl = `${base_url}/interno/foto?foto_nombre=${this.interno.foto_frente}`;
    }else{        
        this.imagenUrl= `${base_url}/interno/foto?foto_nombre=no-image.jpg`;
    }
     //fin extraer foto del interno
                             
  }
  //FIN EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  //.................................................

  
  //ACTUALIZACION DE FOTO
  onUpload(foto: File){
    try {
      
      this.fotoSubir = foto;
      let id: number =  this.id; //this.id es proveniente de la tabla
      this.fileUploadService.actualizarFotoInterno(this.fotoSubir, id).then((respuesta: any) => {
            if(respuesta.ok){
            Swal.fire('Actualización Exitosa!!', "La foto del Interno ha sido cambiada con éxito","success");
            }else{
                throw new Error('Error al Actualizar la foto');
            }
      }).catch(error => {
        Swal.fire('Error', error.message, "error"); 
      });
        
    } catch (error:any) {
        
        Swal.fire('Error', error.message, "error");    
    }
  }  
  //FIN ACTUALIZACION DE FOTO
  //..........................



  //OBTENER DATOS DE TABLAS
  obtenerDatosTablas() {
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
  //FIN OBTENER DATOS DE TABLAS
  //.................................................

  //VALIDACIONES FORMULARIOS
  //mensajes de validaciones
  interno_validation_messages = {
    //datos personales
    
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
      { type: 'required', message: 'El segundo apellio es requerido' },
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
    'fecha_ingreso': [
      { type: 'required', message: 'La fecha de ingreso es requerida.'}
    ],
    'establecimiento_procedencia_id': [
      { type: 'required', message: 'El establecimiento de procedencia es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'prontuario_policial': [
      { type: 'required', message: 'El prontuario policial es requerido.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ],

    //Fin datos personales................................................

    //datos procesales
    
    'reingreso_id': [
      { type: 'required', message: 'El reingreso es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'reingreso_num': [
      { type: 'required', message: 'El numero de reingreso es requerido.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
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
    'jurisdiccion1_id': [
      { type: 'required', message: 'La jurisdiccion es requerida.'},
      { type: 'pattern', message: 'El valor ingresado no es un número.' }
    ],
    'jurisdiccion2_id': [
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
    'jurisdiccion_provincia_id': [
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
      { type: 'pattern', message: 'Solo se pueden ingresar letras y espacios.' },
      { type: 'minlength', message: 'La cantidad mínima de caracteres es 2.' },
      { type: 'maxlength', message: 'La cantidad máxima de caracteres es 50.'} 
    ]

  }  
  //Fin datos procesales..................................................
  //Fin mensajes de validaciones..........................................

  //validacion de formulario data personales
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
  get fechaIngresoNoValido(){    
    return this.formData.get('fecha_ingreso')?.invalid && this.formData.get('fecha_ingreso')?.touched;
  }
  get establecimientoProcedenciaNoValido(){
    return this.formData.get('establecimiento_procedencia_id')?.invalid && this.formData.get('establecimiento_procedencia_id')?.touched;
  }  

  get prontuarioPolicialNoValido(){
    return this.formData.get('prontuario_policial')?.invalid && this.formData.get('prontuario_policial')?.touched;
  }
  //Fin validacion de formulario data personales.....................................................................

  //validacion de formulario data procesales

  get reingresoNoValido(){
    return this.formDataProcesales.get('reingreso_id')?.invalid && this.formDataProcesales.get('reingreso_id')?.touched;
  }  
  get reingresoNumNoValido(){
    return this.formDataProcesales.get('reingreso_num')?.invalid && this.formDataProcesales.get('reingreso_num')?.touched;
  }    

  get causaPenalNoValido(){    
    return this.formDataProcesales.get('causa_penal')?.invalid && this.formDataProcesales.get('causa_penal')?.touched;
  }

  get tipoCondenaNoValido(){
    return this.formDataProcesales.get('tipo_condena_id')?.invalid && this.formDataProcesales .get('tipo_condena_id')?.touched;
  }

  get expedienteNumeroNoValido(){
    return this.formDataProcesales.get('expediente_numero')?.invalid && this.formDataProcesales.get('expediente_numero')?.touched;
  }
  
  get expedientePolicialNoValido(){
    return this.formDataProcesales.get('expediente_policial')?.invalid && this.formDataProcesales.get('expediente_policial')?.touched;
  }

  get estadoProcesalNoValido(){
    return this.formDataProcesales.get('estado_procesal_id')?.invalid && this.formDataProcesales.get('estado_procesal_id')?.touched;
  }  
  get tipoDelitoNoValido(){
    return this.formDataProcesales.get('tipo_delito_id')?.invalid && this.formDataProcesales.get('tipo_delito_id')?.touched;
  }  
  get jurisdiccion1NoValido(){
    return this.formDataProcesales.get('jurisdiccion1_id')?.invalid && this.formDataProcesales.get('jurisdiccion1_id')?.touched;
  }
  get jurisdiccion2NoValido(){
    return this.formDataProcesales.get('jurisdiccion2_id')?.invalid && this.formDataProcesales.get('jurisdiccion2_id')?.touched;
  }   

  get reincidenciaNoValido(){    
    return this.formDataProcesales.get('reincidencia_id')?.invalid && this.formDataProcesales.get('reincidencia_id')?.touched;
  }

  get reincidenciaNumNoValido(){    
    return this.formDataProcesales.get('reincidencia_num')?.invalid && this.formDataProcesales.get('reincidencia_num')?.touched;
  }

  get juzgadoNoValido(){
    return this.formDataProcesales.get('juzgado_id')?.invalid && this.formDataProcesales.get('juzgado_id')?.touched;
  }

  get detencionesNoValido(){
    return this.formDataProcesales.get('detenciones')?.invalid && this.formDataProcesales.get('detenciones')?.touched;
  }
  get jurisdiccionProvinciaNoValido(){
    return this.formDataProcesales.get('jurisdiccion_provincia_id')?.invalid && this.formDataProcesales.get('jurisdiccion_provincia_id')?.touched;
  }

  get fechaDetencionNoValido(){
    return this.formDataProcesales.get('madre')?.invalid && this.formDataProcesales.get('madre')?.touched;
  }

  get condenaJuzgadoNoValido(){
    return this.formDataProcesales.get('condena_juzgado_id')?.invalid && this.formDataProcesales.get('condena_juzgado_id')?.touched;
  }  
  get totalAniosNoValido(){
    return this.formDataProcesales.get('total_anios')?.invalid && this.formDataProcesales.get('total_anios')?.touched;
  }  
  get totalMesesNoValido(){
    return this.formDataProcesales.get('total_meses')?.invalid && this.formDataProcesales.get('total_meses')?.touched;
  }  

  get totalDiasNoValido(){
    return this.formDataProcesales.get('total_dias')?.invalid && this.formDataProcesales.get('total_dias')?.touched;
  }
  get computoNoValido(){
    return this.formDataProcesales.get('computo')?.invalid && this.formDataProcesales.get('computo')?.touched;
  }

  get fechaCumpleNoValido(){
    return this.formDataProcesales.get('fecha_cumple')?.invalid && this.formDataProcesales.get('fecha_cumple')?.touched;
  }

  get tipoDefensorNoValido(){
    return this.formDataProcesales.get('tipo_defensor_id')?.invalid && this.formDataProcesales.get('tipo_defensor_id')?.touched;
  }  
  get abogadoNoValido(){
    return this.formDataProcesales.get('abogado')?.invalid && this.formDataProcesales.get('abogado')?.touched;
  }  
  //fin validacion formulario data procesales........................................
  //FIN VALIDACIONES FORMULARIOS..........................................


}
