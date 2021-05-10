import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  constructor(
    private fb: FormBuilder
  ) { }


  public formData = this.fb.group({
    correo: ['testing1@gmail.com', [Validators.required, Validators.email]],
    dni: ['32333444',[Validators.required, Validators.min(7), Validators.max(9)]],
    nombre: ['Pedro',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    apellido: ['Diaz',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]]
  });

  crearUsuario(){
    
  }

}
