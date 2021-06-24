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
    correo: ['sexitos@gmail.com', [Validators.required, Validators.email]],
    dni: ['32505424',[Validators.required]],
    nombre: ['pedro',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido: ['diaz',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    clave: ['123456',[Validators.required, Validators.minLength(6)]],
    password2: ['123456',[Validators.required, Validators.minLength(6)]],
    foto: ['no-image.jpg',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
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
