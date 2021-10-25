import { Component, OnInit } from '@angular/core';
import { TablasArray } from 'src/app/common/tablas-array';
import { InternoModel } from '../../../models/interno.model';
import { InternosService } from '../../../services/internos.service';

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

}
