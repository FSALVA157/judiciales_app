import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private usuarioService: UsuariosService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  public formLogin = this.fb.group({
    correo: ['test15@gmail.com', [Validators.required, Validators.email]],
    clave: ['123456',[Validators.required]],
    recuerdame: [false]
  });
  
  loginUsuario(){
    
    const usuario= this.usuarioService.login(this.formLogin.value)
      .subscribe(
        respuesta => {
          Swal.fire({
            title: 'Login correcto',
            text: "Ha ingresado a la aplicacion",
            icon: 'info',
            
          });
          this.router.navigateByUrl("dashboard");
        },
        err => {
          Swal.fire({
            title: 'Error de login',
            text: err.error.message,
            icon: 'warning',
            
          })
        })
      
    
  }
  

}
