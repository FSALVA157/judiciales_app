import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { environment} from '../../../environments/environment'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {
  
  menu: any[] = [];
  
  imagenUrl: string ="";

  constructor(
    private sidebarService: SidebarService
  ) { 
    this.menu = this.sidebarService.menu;
    if(localStorage.getItem('img')){
      this.imagenUrl = `${environment.BASE_URL}/usuario/foto?foto_nombre=${localStorage.getItem('img')}`;
    }
    else{
      this.imagenUrl = `${environment.BASE_URL}/usuario/foto?foto_nombre=no-image.jpg`;
    }
    
  }

  

}
