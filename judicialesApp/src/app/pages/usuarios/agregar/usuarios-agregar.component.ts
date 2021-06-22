import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-agregar',
  templateUrl: './usuarios-agregar.component.html',
  styles: [
  ]
})
export class UsuariosAgregarComponent {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
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
  crearUsuario(){
    this.submitted=true;
    if(this.formData.invalid){     
      return;
    }
    this.usuariosService.crearUsuario(this.formData.value)    
                          .subscribe(
                            respuesta => {
                              Swal.fire({
                                title: 'Crear Usuario',
                                text: "Usuario creado correctamente",
                                icon: 'info',
                                
                              });
                              //DIRECCIONAMIENTO
                              this.router.navigateByUrl("dashboard/listar-usuarios");
                            }, 
                            (err) => {
                              Swal.fire({
                                title: 'Error al crear usuario',
                                text: err.error.message,
                                icon: 'warning',                              
                              })   
                            }
                          );
  }
  //FIN CREAR USAURIO
  
  campoNoValido(campo:string):boolean{
    if(this.formData.get(campo)?.invalid && this.submitted){
      return true;
    }
      
    return false;
  }

  contraseniaValida():boolean{
    const clave1 = this.formData.get('clave')?.value;
    const clave2 = this.formData.get('password2')?.value;
    if((clave1!== clave2 && this.submitted) || (this.formData.get('clave')?.invalid && this.submitted)){

      return false;
    }

    return true;
  }


}
