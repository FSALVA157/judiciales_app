import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { environment} from '../../../environments/environment';
import { globalConstants } from '../../common/global-constants';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  implements OnInit {
  
  menu: any[] = [];  
  imagenUrl: string ="";
  nombreUsuario: string="";

  constructor(
    private sidebarService: SidebarService
  ) { 
    this.menu = this.sidebarService.menu;
    this.imagenUrl = globalConstants.urlImagen;
    console.log("imagen sidebar",this.imagenUrl);
    // if(globalConstants.urlImagen){
    //   //this.imagenUrl = `${environment.BASE_URL}/usuario/foto?foto_nombre=${globalConstants.urlImagen}`;
    //   this.imagenUrl = globalConstants.urlImagen;
    // }
    // else{
    //   this.imagenUrl = `${environment.BASE_URL}/usuario/foto?foto_nombre=no-image.jpg`;
    // }
    if(globalConstants.nombreUsuario){
      this.nombreUsuario = globalConstants.nombreUsuario || "";
    }
    else{
      this.nombreUsuario = "Sin nombre"
    }
   
    
  }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');

  }

}
