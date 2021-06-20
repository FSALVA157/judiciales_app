import { Component, OnInit } from '@angular/core';
import { globalConstants } from 'src/app/common/global-constants';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';

import jsPDF from 'jspdf';//importacion para pdf
import autoTable from 'jspdf-autotable';//importacion para pdf
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['../../pages.component.css']
})

export class UsuariosListarComponent implements OnInit {
 
  //array que se utiliza en el ngfor en el html
  lista_usuarios: UsuarioModel[] = []; //array con los objetos usuarios  
  cols: any[]=[]; //array de columnas de la tabla  
  lista_usuarios_pdf: any[]=[]; //array que copia la lista de usuarios para crear el pdf
  exportColumns: any[] = []; //array de columnas para crear el pdf
  

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listaUsuarios();
    
    //inicializacion de cabeceras de columnas
    this.cols = [      
      { field: 'correo', header: 'Correo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'unidad', header: 'Unidad' }
    ];
    //FIN inicializacion de cabeceras de columnas
    
    //armado de columnas para exportar el pdf
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
          //armado de array de usuarios para exportar el pdf
          this.lista_usuarios_pdf = this.lista_usuarios;
          console.log("columnas lista creada para pdf", this.exportColumns);
          console.log("lista creada para pdf", this.lista_usuarios_pdf);
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS

  //EXPORTAR TABLA A PDF
  exportPdf() {
    const doc = new jsPDF('p','pt');
      
    autoTable(doc, {
      columns: this.exportColumns,
      body: this.lista_usuarios_pdf,
      didDrawPage: (dataArg) => { 
        doc.text('Usuarios del Sistema Judiciales del S.P.P.S.', dataArg.settings.margin.left, 10);
      }
    });     
    doc.save('Usuarios.pdf');

  }
  //FIN EXPORTAR TABLA A PDF

  exportPdf_2() {
    const DATA:any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');

    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

  
}
