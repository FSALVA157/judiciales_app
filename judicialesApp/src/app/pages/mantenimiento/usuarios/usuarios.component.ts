import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { globalConstants } from 'src/app/common/global-constants';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';

//import jsPDF from 'jspdf';
declare let jsPDF: any;
//import 'jspdf-autotable';
//import html2canvas from 'html2canvas';
//nombre de la funcion para mostrar los botones
declare const botones : any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['../../pages.component.css']
})

export class UsuariosComponent implements OnInit {
 
  //array que se utiliza en el ngfor en el html
  lista_usuarios: UsuarioModel[] = [];
  cols: any[]=[];
  exportColumns: any[] = [];


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listaUsuarios();

    this.cols = [
      { field: 'correo', header: 'Correo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'unidad_id', header: 'Unidad' }
    ];

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
    
  }

  ngAfterViewInit(): void {
    //botones();
    //this.listaUsuarios();    
    
  }

   //LISTADO COMPLETO DE USUARIOS POR UNIDAD
  listaUsuarios() {
    const unidad: number = globalConstants.unidad;
    console.log("unidad del usuario", unidad);
    this.usuariosService.getListaUsuariosXUnidad(unidad)
      .subscribe(
        data => {                    
          this.lista_usuarios = data;        
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS

  //EXPORTAR TABLA A PDF
  exportPdf() {

    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    //doc.autoTable(this.exportColumns, this.lista_usuarios);
    doc.save('usuarios.pdf');
    // import("jspdf").then(jsPDF => {
    //     import("jspdf-autotable").then(x => {
    //         const doc = new jsPDF.default("p","cm");
    //         doc.autoTable(this.exportColumns, this.lista_usuarios);
    //         doc.save('products.pdf');
    //     })
    // })    
    // const doc = new jsPDF();
    // doc.autoTable({ html: 'tabla-usuarios' })
    
    //doc.save("tabla usuarios.pdf");
  }
  //FIN EXPORTAR TABLA A PDF
}
