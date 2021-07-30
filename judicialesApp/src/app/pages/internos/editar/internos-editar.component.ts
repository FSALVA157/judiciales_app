import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TablasArray } from 'src/app/common/tablas-array';
import { FileUploadService } from 'src/app/services/file-upload.service';
import Swal from 'sweetalert2';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

@Component({
  selector: 'app-internos-editar',
  templateUrl: './internos-editar.component.html',
  styleUrls: ['../../pages.component.css']
})
export class InternosEditarComponent implements OnInit {

  id:number = 0;
  interno!: InternoModel;
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
    prontuario: ['',[Validators.required]],
    apellido_1: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido_2: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_1: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_2: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_3: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    alias: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    dni: ['',[Validators.required]],
    sexo_id: ['',[Validators.required]],
    estado_civil_id: ['',[Validators.required]],
    telefono: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    domicilio: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    departamento_id: ['',[Validators.required]],
    zona_residencia_id: ['',[Validators.required]],
    nacionalidad_id: ['',[Validators.required]],
    departamento_nacimiento_id: ['',[Validators.required]],
    fecha_nacimiento: ['',[Validators.required]],
    lugar_nacimiento: ['',[Validators.required]],
    padre: ['',[Validators.required]],
    madre: ['',[Validators.required]],
    parientes: ['',[Validators.required]],
    referente_emergencia: ['',[Validators.required]],
    nivel_educacion_id: ['',[Validators.required]],
    profesion: ['',[Validators.required]],
    ultimo_oficio_id: ['',[Validators.required]],
    religion_id: ['',[Validators.required]],
    talla: ['',[Validators.required]],
    ojos_color_id: ['',[Validators.required]],
    ojos_tamanio_id: ['',[Validators.required]],
    nariz_tamanio_id: ['',[Validators.required]],
    nariz_forma_id: ['',[Validators.required]],
    pelo_tipo_id: ['',[Validators.required]],
    pelo_color_id: ['',[Validators.required]],
    piel_id: ['',[Validators.required]],
    marca_corporal: ['',[Validators.required]],
    unidad_id: ['',[Validators.required]],
    prontuario_policial: ['',[Validators.required]],
    establecimiento_procedencia_id: ['',[Validators.required]],
    fecha_ingreso: ['',[Validators.required]],
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
    
    pabellon_id: ['',[Validators.required]],
    reingreso_id: ['',[Validators.required]],
    reingreso_num: ['',[Validators.required]],
    causa_penal: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    tipo_condena_id: ['',[Validators.required]],
    expediente_numero: ['',[Validators.required]],
    expediente_policial: ['',[Validators.required]],
    estado_procesal_id: ['',[Validators.required]],
    tipo_delito_id: ['',[Validators.required]],    
    reincidencia_id: ['',[Validators.required]],
    reincidencia_num: ['',[Validators.required]],
    juzgado_id: ['',[Validators.required]],
    detenciones: ['',[Validators.required]],
    jurisdiccion_id: ['',[Validators.required]],
    jurisdiccion_provinicia_id: ['',[Validators.required]],
    fecha_detencion: ['',[Validators.required]],
    condena_juzgado_id: ['',[Validators.required]],
    total_anios: ['',[Validators.required]],
    total_meses: ['',[Validators.required]],
    total_dias: ['',[Validators.required]],
    computo: ['',[Validators.required]],
    fecha_cumple: ['',[Validators.required]],
    tipo_defensor_id: ['',[Validators.required]],
    abogado: ['',[Validators.required]]
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
                  console.log("interno editar", x);
                  //METODO LOCAL PARA COLOCAR DATOS DE USUARIO DEVUELTO EN VARIABLES
                  this.extraerDataUsuario(x);
                });
  }


  //METODO ACTUALIZA EL INTERNO
  actualizarInterno() {       

    this.submitted=true; //establecer que se envio el formulario
    //controlar si el formulario es valido
    if(this.formData.invalid){     
      console.log("fallo formulario");
      return;

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
      console.log("fallo formulario");
      return;

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
  extraerDataUsuario(data: any) {
    //voy a desestructurar respuesta
     //const {id_usuario, apellido, correo, dni, foto, nombre, unidad_id} = data;
     //this.usuario = new UsuarioModel(id_usuario,correo,"", dni,nombre,apellido,unidad_id,foto);
     
     this.interno = data;
     console.log(" interno de data", this.interno);  
     this.imagenUrl = this.interno.fotoUrl;  
     
     console.log("imagen de interno", this.interno.fotoUrl);                               
  }
  //FIN EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  //.................................................

  //ACTUALIZACION DE FOTO
  onUpload(foto: File){
    try {
      
      this.fotoSubir = foto;
      let id: number =  this.id; //this.id es proveniente de la tabla
      this.fileUploadService.actualizarFotoInterno(this.fotoSubir, id).then(respuesta => {
            if(respuesta.ok){
            Swal.fire('Actualización Exitosa!!', "La foto del Interno ha sido cambiada con éxito","success");
            }else{
                throw new Error('Error al Actualizar la foto');
            }
      }).catch(error => {
        Swal.fire('Error', error.message, "error"); 
      });
        
    } catch (error) {
        
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


}
