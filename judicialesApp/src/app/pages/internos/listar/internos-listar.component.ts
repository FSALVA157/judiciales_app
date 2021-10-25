import { Component, OnInit } from '@angular/core';
import { TablasArray } from 'src/app/common/tablas-array';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

import * as FileSaver from 'file-saver';

interface IObjectModel{
  label: string; 
  value: string;
}

@Component({
  selector: 'app-internos-listar',
  templateUrl: './internos-listar.component.html',
  styleUrls: ['../../pages.component.css']
})
export class InternosListarComponent implements OnInit {

  //array que se utiliza en el ngfor en el html
  total:number = 0;
  lista_internos: InternoModel[] = []; //array con los objetos internos
  selectedInterno: InternoModel[]=[];  
  cols: any[]=[]; //array de columnas de la tabla  
  lista_internos_pdf: any[]=[]; //array que copia la lista de internos para crear el pdf
  exportColumns: any[] = []; //array de columnas para crear el pdf

  sexos: IObjectModel[]=[];


  colsTablaInternosExport: any[]=[]; //array de columnas de la tabla

  constructor(
    private internosService: InternosService
  ) { }

  ngOnInit(): void {
    //inicializacion de cabeceras de columnas
    this.colsTablaInternosExport = [      
      { field: 'id_interno', header: 'Id' },
      { field: 'prontuario', header: 'Prontuario' },
      { field: 'apellido_1', header: 'Primer Apellido' },
      { field: 'apellido_2', header: 'Segundo Apellido' },
      { field: 'nombre_1', header: 'Primer Nombre' },
      { field: 'nombre_2', header: 'Segundo Nombre' },
      { field: 'nombre_3', header: 'Tercer Nombre' },
      { field: 'alias', header: 'alias' },
      { field: 'dni', header: 'DNI' },
      { field: 'sexo.sexo', header: 'Sexo' },
      { field: 'estado_civil.estado_civil', header: 'Estado Civil' },
      // { field: 'destino.destino', header: 'Destino' },
      // { field: 'departamento.departamento', header: 'Departamento' },
      // { field: 'division.division', header: 'División' },
      // { field: 'sector.sector', header: 'Sector' },
      // { field: 'seccion_guardia', header: 'Guardia' },
      // { field: 'funcion', header: 'Función' },
      // { field: 'escalafon.escalafon', header: 'Escalafón' },
      // { field: 'escala_jerarquica.escala_jerarquica', header: 'Escala' },
      // { field: 'nivel_educativo.nivel_educativo', header: 'Educación' },
      // { field: 'nacionalidad', header: 'Nacionalidad' },
      // { field: 'domicilio', header: 'Domicilio' },
      // { field: 'provincia.provincia', header: 'Provincia' },
      // { field: 'departamento_provincial.departamento_provincial', header: 'Dpto Provincial' },
      // { field: 'municipio.municipio', header: 'Municipio' },
      // { field: 'ciudad', header: 'Ciudad' },
    ];

    this.listaInternos();

    this.sexos = TablasArray.drop_sexo.map(respuesta => {
      return {
        label: respuesta.sexo.toLowerCase(),
        value: respuesta.sexo,
       }
});

  }

  //LISTADO COMPLETO DE INTERNOS POR UNIDAD
  listaInternos() {
    //const unidad: number = globalConstants.unidad;
    //console.log("unidad del usuario", unidad);
    this.internosService.getListaInternosTodos()
      .subscribe(
        data => {                    
          this.total = data[1];
          this.lista_internos = data[0];
          //this.lista_internos = data;
          
          //armado de array de usuarios para exportar el pdf
          //this.lista_usuarios_pdf = this.lista_usuarios;
          // console.log("columnas lista creada para pdf", this.exportColumns);
          // console.log("lista creada para pdf", this.lista_usuarios_pdf);
        },
        err => {
          console.log(err);
        }
      );
  }
  //FIN LISTADO COMPLETO DE INTERNOS

  //EXPORTAR A EXCEL
  exportExcel() {
    //mapeo de campos desde personal seleccionado para excel
    const selectedNewFormato = this.selectedInterno.map(item =>{
      return {
        prontuario: item.prontuario,
        primer_apellido: item.apellido_1,
        segundo_apellido: item.apellido_2,
        primer_nombre: item.nombre_1,
        segundo_nombre: item.nombre_2,
        tercer_nombre: item.nombre_2,
        dni: item.dni,
        // fecha_nacimiento: (item.fecha_nacimiento!=null)?this.datePipe.transform(item.fecha_nacimiento, "dd/MM/yyyy"):'',
        // fecha_ingreso: (item.fecha_ingreso!=null)?this.datePipe.transform(item.fecha_ingreso, "dd/MM/yyyy"):'',
        // ultimo_ascenso: (item.ultimo_ascenso!=null)?this.datePipe.transform(item.ultimo_ascenso, "dd/MM/yyyy"):'',
        // cuil: item.cuil,
        // sexo: (item.sexo)?(JSON.parse(JSON.stringify(item.sexo))).sexo:'',
        // estado_civil: (item.estado_civil)?(JSON.parse(JSON.stringify(item.estado_civil))).estado_civil:'',
        // destino: (item.destino)?(JSON.parse(JSON.stringify(item.destino))).destino:'',
        // departamento: (item.departamento)?(JSON.parse(JSON.stringify(item.departamento))).departamento:'',
        // division: (item.division)?(JSON.parse(JSON.stringify(item.division))).division:'',
        // sector: (item.sector)?(JSON.parse(JSON.stringify(item.sector))).sector:'',
        // seccion_guardia: (item.seccion_guardia)?(JSON.parse(JSON.stringify(item.seccion_guardia))).seccion: '',
        // funcion: item.funcion,
        // escalafon: (item.escalafon)?(JSON.parse(JSON.stringify(item.escalafon))).escalafon:'',
        // escala_jerarquica: (item.escala_jerarquica)?(JSON.parse(JSON.stringify(item.escala_jerarquica))).escala_jerarquica:'',
        // grado: (item.grado)?(JSON.parse(JSON.stringify(item.grado))).grado:'',
        // nacionalidad: item.nacionalidad,
        // domicilio: item.domicilio,
        // provincia: (item.provincia)?(JSON.parse(JSON.stringify(item.provincia))).provincia:'',
        // departamento_provincial: (item.departamento_provincial)?(JSON.parse(JSON.stringify(item.departamento_provincial))).departamento_provincial:'',
        // municipio: (item.municipio)?(JSON.parse(JSON.stringify(item.municipio))).municipio:'',
        // telefono: item.telefonos,
        // email: item.email,
        // altura: item.altura,
        // peso: item.peso,
        // nivel_educativo: (item.nivel_educativo)?(JSON.parse(JSON.stringify(item.nivel_educativo))).nivel_educativo:'',
        // situacion: (item.situacion)?(JSON.parse(JSON.stringify(item.situacion))).situacion:'',
  
      }
    });

    //armado de archivo excel con lalista mapeada, utilizacion de metodo "saveAsExcelFile"para guardarlo  
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(selectedNewFormato);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "Internos");
    });
  }
  //FIN EXPORTAR A EXCEL
  
  //METODO PARA GUARDAR EL ARCHIVO EXCEL
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    //FileSaver.saveAs(data, fileName + '-' + this.datePipe.transform(new Date(),"dd-MM-yyyy") + EXCEL_EXTENSION);
    FileSaver.saveAs(data, fileName + '-' + EXCEL_EXTENSION);
  }
  //FIN METODO PARA GUARDAR EL ARCHIVO EXCEL

}
