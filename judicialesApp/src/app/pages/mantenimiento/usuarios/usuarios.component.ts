import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { globalConstants } from 'src/app/common/global-constants';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';
//nombre de la funcion para mostrar los botones
declare const botones : any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})

export class UsuariosComponent implements OnInit {
 
  //array que se utiliza en el ngfor en el html
  lista_usuarios: UsuarioModel[] = [];

  showContent: any;

  //triger
  dtTrigger: Subject<any> = new Subject();

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    //this.listaUsuarios();
    
    
  }

  ngAfterViewInit(): void {
    botones();
    this.listaUsuarios();
    
    
  }



   //LISTADO COMPLETO DE USUARIOS POR UNIDAD
  listaUsuarios() {
    const unidad: number = globalConstants.unidad;
    console.log("unidad del usuario", unidad);
    this.usuariosService.getListaUsuariosXUnidad(unidad)
      .subscribe(
        data => {                    
          this.lista_usuarios = data;   
          this.dtTrigger.next();       
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS
}
