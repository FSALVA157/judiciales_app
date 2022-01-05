import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { globalConstants } from 'src/app/common/global-constants';
import { environment } from 'src/environments/environment';

const base_url = environment.BASE_URL

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

  //DEFINICION DE MODELO FORMULARIO QUE SE VINCULA AL FORMULARIO HTML
  //localStorage permite obtener el contenido guardado en el navegador
  public formLogin = this.fb.group({
    correo: [localStorage.getItem("email") || "", [Validators.required, Validators.email]],
    clave: ['',[Validators.required]],
    recuerdame: [false]
  });
  //FIN DEFINICION DE MODELO FORMULARIO QUE SE VINCULA AL FORMULARIO HTML
  

  //EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  extraerDataUsuario(data: any) {
    //voy a desestructurar respuesta
     const {id_usuario, apellido, correo, dni, foto, nombre, unidad_id} = data;
     //const user: UsuarioModel = new UsuarioModel(id_usuario,correo,"", dni,nombre,apellido,unidad_id,foto);
     const user: UsuarioModel = data;
     if(user.foto){
      globalConstants.urlImagen = `${base_url}/usuario/foto?foto_nombre=${user.foto}`;
     }else{
      globalConstants.urlImagen = `${base_url}/usuario/foto?foto_nombre=no-image.jpg`;
     }
     console.log("foto login", user.fotoUrl);
     //globalConstants.urlImagen = user.fotoUrl;                                   
     globalConstants.nombreUsuario = user.nombre + " " + user.apellido;
     globalConstants.emailUsuario = user.correo;
     globalConstants.unidad = unidad_id;
     globalConstants.unidad_nombre= data.unidad.unidad;
     globalConstants.role= data.role;
  }
  //FIN EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  
  //LOGIN USUARIO
  loginUsuario(){    
    const usuario= this.usuarioService.login(this.formLogin.value)
      .subscribe(
        respuesta => {
          Swal.fire({
            title: 'Login correcto',
            text: "Ha ingresado a la aplicacion",
            icon: 'success',
            
          });
          //VARIABLE PARA CONTROLAR SI ESTA VALIDADO          
          console.log("usuario login comp ts",respuesta); 
          globalConstants.validado = true;

          //METODO LOCAL PARA COLOCAR DATOS DE USUARIO EN VARIABLES GLOBALES
          this.extraerDataUsuario(respuesta);
                   
          //RECORDAR EL CORREO ELECTRONICO EN EL NAVEGADOR
          //localStorage permite guardar en el navegador con el nombre "email" el "correo ingresado"
          if(this.formLogin.get("recuerdame")?.value){
            localStorage.setItem("email",this.formLogin.get("correo")?.value);
          }
          else{
            //borra el "correo" que esta guardado en el navegador con el nombre "email"
            localStorage.removeItem("email");
          }
          //FIN RECORDAR EL CORREO ELECTRONICO EN EL NAVEGADOR

          //DIRECCIONAMIENTO
          this.router.navigateByUrl("dashboard");
          globalConstants.menu_en_uso = "INICIO";

        },
        err => {
          Swal.fire({
            title: 'Error de login',
            text: err.error.message,
            icon: 'warning',
            
          })
          globalConstants.validado = false;
        }
      );   
    
  }
  //FIN LOGIN USUARIO

}
