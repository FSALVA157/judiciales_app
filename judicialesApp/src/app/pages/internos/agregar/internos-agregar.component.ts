import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

@Component({
  selector: 'app-internos-agregar',
  templateUrl: './internos-agregar.component.html',
  styles: [
  ]
})
export class InternosAgregarComponent implements OnInit {
  submitted = false;
  interno: InternoModel = new InternoModel;

  constructor(
    private fb: FormBuilder,
    private internosService: InternosService,
    private router:Router
  ) { }

  public formData = this.fb.group({
    prontuario: ['3110',[Validators.required]],
    apellido_1: ['rojas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido_2: ['rosas',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nombre_1: ['juan',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    nombre_2: ['antonio',[Validators.required, Validators.minLength(6)]],
    nombre_3: ['marco',[Validators.required, Validators.minLength(6)]],
    alias: ['no alias',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    dni: ['3110',[Validators.required]],
    sexo_id: ['1',[Validators.required]],
    estado_civil_id: ['2',[Validators.required]],
    telefono: ['15414',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    domicilio: ['salta barrio',[Validators.required, Validators.minLength(6)]],
    departamento_id: ['2',[Validators.required]],
    zona_residencia_id: ['1',[Validators.required]],
    nacionalidad_id: ['1',[Validators.required]],
    departamento_nacimiento_id: ['1',[Validators.required]],
    fecha_nacimiento: ['27/05/2021',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lugar_nacimiento: ['1',[Validators.required]],
    padre: ['lucas',[Validators.required, Validators.minLength(6)]],
    madre: ['lisa',[Validators.required, Validators.minLength(6)]],
    parientes: ['rosa',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    referente_emergencia: ['no alias',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    nivel_educacion_id: ['3110',[Validators.required]],
    profesion: ['1',[Validators.required]],
    ultimo_oficio_id: ['2',[Validators.required]],
    religion_id: ['15414',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    talla: ['salta barrio',[Validators.required, Validators.minLength(6)]],
    ojos_color_id: ['2',[Validators.required]],
    ojos_tamanio_id: ['1',[Validators.required]],
    nariz_tamanio_id: ['1',[Validators.required]],
    nariz_forma_id: ['1',[Validators.required]],
    pelo_tipo_id: ['27/05/2021',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    pelo_color_id: ['1',[Validators.required]],
    piel_id: ['lucas',[Validators.required, Validators.minLength(6)]],
    marca_corporal: ['lisa',[Validators.required, Validators.minLength(6)]],
    unidad_id: ['rosa',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    pabellon_id: ['2',[Validators.required]],
    establecimiento_procedencia_id: ['1',[Validators.required]],
    reingreso_id: ['1',[Validators.required]],
    reingreso_num: ['1',[Validators.required]],
    fecha_ingreso: ['27/05/2021',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    causa_penal: ['1',[Validators.required]],
    tipo_condena_id: ['lucas',[Validators.required, Validators.minLength(6)]],
    expediente_numero: ['lisa',[Validators.required, Validators.minLength(6)]],
    prontuario_policial: ['rosa',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    expediente_policial: ['no alias',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    estado_procesal_id: ['3110',[Validators.required]],
    tipo_delito_id: ['1',[Validators.required]],
    jurisdiccion_id: ['2',[Validators.required]],
    reincidencia_id: ['15414',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    reincidencia_num: ['salta barrio',[Validators.required, Validators.minLength(6)]],
    juzgado_id: ['2',[Validators.required]],
    detenciones: ['1',[Validators.required]],
    jurisdiccion_provinicia_id: ['1',[Validators.required]],
    fecha_detencion: ['1',[Validators.required]],
    condena_juzgado_id: ['27/05/2021',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    total_anios: ['1',[Validators.required]],
    total_meses: ['lucas',[Validators.required, Validators.minLength(6)]],
    total_dias: ['lisa',[Validators.required, Validators.minLength(6)]],
    computo: ['rosa',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    fecha_cumple: ['salta barrio',[Validators.required, Validators.minLength(6)]],
    tipo_defensor_id: ['2',[Validators.required]],
    abogado: ['1',[Validators.required]]
  });

  //CREAR USAURIO
  crearInterno(){
    this.submitted=true;
    if(this.formData.invalid){     
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
  //FIN CREAR USAURIO

  ngOnInit(): void {
    

    this.interno.prontuario=254;
    this.interno.apellido_1 = "Ortiz";
    this.interno.apellido_2 ="Ruiz";
    this.interno.nombre_1 = "Juan";
    this.interno.nombre_2 = "Luis";
    this.interno.nombre_3 = "marcos";
    
    console.log("interno en componente ts", this.interno);

  }

}
