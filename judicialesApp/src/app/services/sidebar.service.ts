import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any = [
    {
      titulo:"Internos",
      icono: "fas fa-user-friends",
      submenu: [
        {titulo: "Agregar", url: "/dashboard/agregar"},
        {titulo: "Editar", url: "/dashboard/editar"},
        {titulo: "Listar", url: "/dashboard/listar"}
      ]
    },
    {
      titulo:"Expedientes",
      icono: "fas fa-folder",
      submenu: [
        {titulo: "Agregar", url: "agregar"},
        {titulo: "Editar", url: "editar"},
        {titulo: "Listar", url: "listar"}
      ]
    }
    
  
  ];
}
