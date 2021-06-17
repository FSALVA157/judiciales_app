import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { globalConstants } from 'src/app/common/global-constants';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';

import jsPDF from 'jspdf';
//declare let jsPDF: any;
//import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
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
  
  columns: any[]=[];
  sales: any[] = [];

  exportColumns: any[] = [];


  constructor(private usuariosService: UsuariosService) { }

  

  ngOnInit(): void {
    this.listaUsuarios();
    
    this.sales = [
      { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
      { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
      { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
      { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
      { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
      { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
      { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
      { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
      { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
      { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    ];
    
    this.columns = [
      { title: "Brands", dataKey: "brand" },
      { title: "Last Year Sale", dataKey: "lastYearSale" },
      { title: "This Year Sale", dataKey: "thisYearSale" },
      { title: "Last Year Profit", dataKey: "lastYearProfit" }
    ];
    
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
          console.log("lista de usuarios", this.lista_usuarios);       
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
          
    // autoTable(doc, {
    //   columns: this.exportColumns,
    //   body: this.lista_usuarios,
    //   didDrawPage: (dataArg) => { 
    //     doc.text('Usuario Sistema Judiciales', dataArg.settings.margin.left, 10);
    //   }
    // }); 
    
    //doc.autoTable(this.exportColumns, this.lista_usuarios);
    
    doc.save('Usuarios.pdf');


    // const doc = new jsPDF();
    // doc.text("Hello world!", 10, 10);
    // doc.save('usuarios.pdf');



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
