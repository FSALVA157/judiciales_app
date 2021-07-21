import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../../../models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['../../pages.component.css']
})
export class UsuariosEditarComponent implements OnInit {
  id:number = 0;
  usuario!: UsuarioModel;
  fotoSubir: File | undefined;//variable para guardar la imagen
  imagenUrl: string ="";
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router:Router,
    private routeActivate: ActivatedRoute,
    private readonly fileUploadService: FileUploadService
  ) { }

  //creacion de formulario de datos para html
  formData = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    dni: ['',[Validators.required]],
    nombre: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    // clave: ['123456',[Validators.required, Validators.minLength(6)]],
    // password2: ['123456',[Validators.required, Validators.minLength(6)]],
    foto: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
  });
  //... fin creacion de formulario de datos para html

  //creacion de formulario de conrasenias para html
  formContrasenias = this.fb.group({    
    clave: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]]
  });
  //... creacion de formulario de conrasenias para html


  ngOnInit(): void {
    //recuperar id del usuario que biene de la tabla
    this.id = this.routeActivate.snapshot.params['id'];
    
    //busqueda de usuario y carga de datos en el formulario    
    this.usuariosService.getUsuarioXId(this.id)
                .pipe(first())
                .subscribe(x =>{ this.formData.patchValue(x);
                  console.log("usuario editar", x);
                  //METODO LOCAL PARA COLOCAR DATOS DE USUARIO DEVUELTO EN VARIABLES
                  this.extraerDataUsuario(x);
                });
                
  }

  //EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO
  extraerDataUsuario(data: any) {
    //voy a desestructurar respuesta
     const {id_usuario, apellido, correo, dni, foto, nombre, unidad_id} = data;
     this.usuario = new UsuarioModel(id_usuario,correo,"", dni,nombre,apellido,unidad_id,foto);
     this.imagenUrl = this.usuario.fotoUrl;                                   
  }
  //FIN EXTRAER DATOS DE USUARIO Y CREAR NUEVO MODELO


  //METODO ACTUALIZA EL USUARIO
  actualizarUsuario(formularioEnviado: string) {
    let formEnviar= this.fb.group({})
    if(formularioEnviado==='datos') {
      formEnviar = this.formData;
    }
    if(formularioEnviado==='contrasenia') {
      formEnviar = this.formContrasenias;
    }

    this.submitted=true; //establecer que se envio el formulario
    //controlar si el formulario es valido
    if(formEnviar.invalid){     
      return;
    }
    //...fin controlar si el formulario es valido

    this.usuariosService.actualizarDatosUsuario(this.id, formEnviar.value, formularioEnviado)
        .pipe(first())
        .subscribe(
          respuesta => {
            Swal.fire({
              title: 'Actualizar Usuario',
              text: "Usuario actualizado correctamente",
              icon: 'success',              
            });
            //DIRECCIONAMIENTO
            this.router.navigateByUrl("dashboard/listar-usuarios");
          }, 
          (err) => {
            Swal.fire({
              title: 'Error al actualizar usuario',
              text: err.error.message,
              icon: 'warning',                              
            })   
          }
      );
  }
  //FIN METODO ACTUALIZA EL USUARIO
  //-------------------------------

    

  //CONTROL DE CAMPOS
  campoNoValido(campo:string):boolean{
    if(this.formData.get(campo)?.invalid && this.submitted){
      return true;
    }
      
    return false;
  }
  //FIN CONTROL DE CAMPOS
  //----------------------

  //VERIFICACION DE CONTRASEÑAS COINCIDENTES
  contraseniaValida():boolean{
    const clave1 = this.formContrasenias.get('clave')?.value;
    const clave2 = this.formContrasenias.get('password2')?.value;
    if((clave1!== clave2 && this.submitted) || (this.formContrasenias.get('clave')?.invalid && this.submitted)){

      return false;
    }

    return true;
  }
  //FIN VERIFICACION DE CONTRASEÑAS COINCIDENTES
  //---------------------------------------------

  //ACTUALIZACION DE FOTO
  onUpload(foto: File){
    try {
      
      this.fotoSubir = foto;
      let id: number =  this.id; //this.id es proveniente de la tabla
      this.fileUploadService.actualizarFotoUsuario(this.fotoSubir, id).then(respuesta => {
            if(respuesta.ok){
            Swal.fire('Actualización Exitosa!!', "La foto del Usuario ha sido cambiada con éxito","success");
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


}
