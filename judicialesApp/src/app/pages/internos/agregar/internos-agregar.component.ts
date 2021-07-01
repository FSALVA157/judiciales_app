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
  styles: [
  ]
})

export class InternosAgregarComponent implements OnInit {
  submitted = false;
  interno: InternoModel = new InternoModel;
  lista_estado_civil: EstadoCivilModel[] = []; //array con los objetos estado-civil
  drop_estado_civil: any[] = []; //array de columnas para dropdown
  drop_nacionalidad: any[] = []; //array de columnas para dropdown
  drop_sexo: any[] = []; //array de columnas para dropdown
  drop_departamento: any[] = []; //array de columnas para dropdown
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
    prontuario: ['3110',[Validators.required]],
    apellido_1: ['rojas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido_2: ['rosas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_1: ['juan',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_2: ['antonio',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_3: ['marco',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    alias: ['no alias',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    dni: ['32505426',[Validators.required]],
    sexo_id: ['1',[Validators.required]],
    estado_civil_id: ['1',[Validators.required]],
    telefono: ['15414',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    domicilio: ['salta barrio',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    departamento_id: ['2',[Validators.required]],
    zona_residencia_id: ['1',[Validators.required]],
    nacionalidad_id: ['1',[Validators.required]],
    departamento_nacimiento_id: ['1',[Validators.required]],
    fecha_nacimiento: ['2000-04-12',[Validators.required]],
    lugar_nacimiento: ['salta capital',[Validators.required]],
    padre: ['lucas',[Validators.required]],
    madre: ['lisa',[Validators.required]],
    parientes: ['rosa',[Validators.required]],
    referente_emergencia: ['no referente',[Validators.required]],
    nivel_educacion_id: ['1',[Validators.required]],
    profesion: ['piscologo',[Validators.required]],
    ultimo_oficio_id: ['1',[Validators.required]],
    religion_id: ['1',[Validators.required]],
    talla: ['25.8',[Validators.required]],
    ojos_color_id: ['2',[Validators.required]],
    ojos_tamanio_id: ['1',[Validators.required]],
    nariz_tamanio_id: ['1',[Validators.required]],
    nariz_forma_id: ['1',[Validators.required]],
    pelo_tipo_id: ['1',[Validators.required]],
    pelo_color_id: ['1',[Validators.required]],
    piel_id: ['2',[Validators.required]],
    marca_corporal: ['1',[Validators.required]],
    unidad_id: ['1',[Validators.required]],
    pabellon_id: ['2',[Validators.required]],
    establecimiento_procedencia_id: ['1',[Validators.required]],
    reingreso_id: ['1',[Validators.required]],
    reingreso_num: ['1',[Validators.required]],
    fecha_ingreso: ['2020-04-12',[Validators.required]],
    causa_penal: ['no tiene muchas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    tipo_condena_id: ['1',[Validators.required]],
    expediente_numero: ['25/458',[Validators.required]],
    prontuario_policial: ['25-854',[Validators.required]],
    expediente_policial: ['25-897',[Validators.required]],
    estado_procesal_id: ['1',[Validators.required]],
    tipo_delito_id: ['1',[Validators.required]],
    jurisdiccion_id: ['2',[Validators.required]],
    reincidencia_id: ['1',[Validators.required]],
    reincidencia_num: ['1',[Validators.required]],
    juzgado_id: ['2',[Validators.required]],
    detenciones: ['en mas de una vez',[Validators.required]],
    jurisdiccion_provinicia_id: ['1',[Validators.required]],
    fecha_detencion: ['2020-04-10',[Validators.required]],
    condena_juzgado_id: ['1',[Validators.required]],
    total_anios: ['4',[Validators.required]],
    total_meses: ['4',[Validators.required]],
    total_dias: ['12',[Validators.required]],
    computo: ['1',[Validators.required]],
    fecha_cumple: ['2018-04-12',[Validators.required]],
    tipo_defensor_id: ['2',[Validators.required]],
    abogado: ['Elvio',[Validators.required]]
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
                                icon: 'info',
                                
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
    this.drop_estado_civil = TablasArray.drop_estado_civil;
    this.drop_departamento = TablasArray.drop_departamento;  
    this.drop_nacionalidad = TablasArray.drop_nacionalidad;
    this.drop_sexo = TablasArray.drop_sexo;
    this.drop_zona_residencia = TablasArray.drop_zona_residencia;
      

  }

}
