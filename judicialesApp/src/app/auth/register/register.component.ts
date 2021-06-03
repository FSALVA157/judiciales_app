import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService
  ) { }

  public formData = this.fb.group({
    correo: ['sexitos@gmail.com', [Validators.required, Validators.email]],
    dni: ['32505424',[Validators.required]],
    nombre: ['pedro',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido: ['diaz',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    clave: ['123456',[Validators.required, Validators.minLength(6)]],
    password2: ['123456',[Validators.required, Validators.minLength(6)]]
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
                              console.log(respuesta);
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
