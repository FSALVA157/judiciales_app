import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any = [
    {
      titulo:"Usuarios",
      icono: "fas fa-user-friends",
      submenu: [
        {titulo: "Mantenimiento", url: "/dashboard/usuarios"},
        
      ]
    },
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
      titulo:"Internos Internos",
      icono: "fas fa-user-friends",
      submenu: [
        {titulo: "Agregar", url: "/dashboard/agregar-interno"},
        {titulo: "Listar", url: "/dashboard/listar-internos"}
      ]
    },
    {
      titulo:"Expedientes",
      icono: "fas fa-folder",
      submenu: [
        {titulo: "Agregarx", url: "agregar"},
        {titulo: "Editarx", url: "editar"},
        {titulo: "Listarx", url: "listar"}
      ]
    }
    
  
  ];
}
