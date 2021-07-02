import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoCivilModel } from '../models/estado_civil.model';
import { SexoModel } from '../models/sexo.model';
import { DepartamentoModel } from '../models/departamento.model';
import { ZonaResidenciaModel } from '../models/zona-residencia.model';
import { NacionalidadModel } from '../models/nacionalidad.model';
import { EstablecimientoProcedenciaModel } from '../models/establecimiento-procedencia.model';
import { EstadoProcesalModel } from '../models/estado-procesal.model';
import { JurisdiccionModel } from '../models/jurisdiccion.model';
import { JuzgadoModel } from '../models/juzgado.model';
import { NarizFormaModel } from '../models/nariz-forma.model';
import { NarizTamanioModel } from '../models/nariz-tamanio.model';
import { NivelEducacionModel } from '../models/nivel-educacion.model';
import { OficioModel } from '../models/oficio.model';
import { OjosColorModel } from '../models/ojos-color.model';
import { OjosTamanioModel } from '../models/ojos-tamanio.model';
import { PabellonModel } from '../models/pabellon.model';
import { PeloColorModel } from '../models/pelo-color.model';
import { PeloTipoModel } from '../models/pelo-tipo.model';
import { PielModel } from '../models/piel.model';
import { ProvinciaModel } from '../models/provincia.model';
import { ReincidenciaModel } from '../models/reincidencia.model';
import { ReingresoModel } from '../models/reingreso.model';
import { ReligionModel } from '../models/religion.model';
import { TipoCondenaModel } from '../models/tipo-condena.model';
import { TipoDefensorModel } from '../models/tipo-defensor.model';
import { TipoDelitoModel } from '../models/tipo-delito.model';
import { UnidadModel } from '../models/unidad.model';

@Injectable({
  providedIn: 'root'
})
export class TablasEscencialesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  //RETORNAR DEPARTAMENTOS TODOS
  getListaDepartamentoTodos(){
    return this.http.get<DepartamentoModel[]>(`${environment.BASE_URL}/departamento`);
  }
  //FIN RETORNAR DEPARTAMENTOS TODOS

  //RETORNAR ESTABLECIMIENTO-PROCEDENCIA TODOS
  getListaEstablecimientoProcedenciaTodos(){
    return this.http.get<EstablecimientoProcedenciaModel[]>(`${environment.BASE_URL}/establecimiento-procedencia`);
  }
  //FIN RETORNAR ESTABLECIMIENTO-PROCEDENCIA TODOS
  
  //RETORNAR ESTADO-CIVIL TODOS
  getListaEstadoCivilTodos(){
    return this.http.get<EstadoCivilModel[]>(`${environment.BASE_URL}/estado-civil`);
  }
  //FIN RETORNAR ESTADO-CIVIL TODOS

  //RETORNAR ESTADO-PROCESAL TODOS
  getListaEstadoProcesalTodos(){
    return this.http.get<EstadoProcesalModel[]>(`${environment.BASE_URL}/estado-procesal`);
  }
  //FIN RETORNAR ESTADO-PROCESAL TODOS

  //RETORNAR JURISDICCION TODOS
  getListaJurisdiccionTodos(){
    return this.http.get<JurisdiccionModel[]>(`${environment.BASE_URL}/jurisdiccion`);
  }
  //FIN RETORNAR JURISDICCION TODOS

  //RETORNAR JUZGADO TODOS
  getListaJuzgadoTodos(){
    return this.http.get<JuzgadoModel[]>(`${environment.BASE_URL}/juzgado`);
  }
  //FIN RETORNAR JUZGADO TODOS

  //RETORNAR NACIONALIDAD TODOS
  getListaNacionalidadTodos(){
    return this.http.get<NacionalidadModel[]>(`${environment.BASE_URL}/nacionalidad`);
  }
  //FIN RETORNAR NACIONALIDAD TODOS


  //RETORNAR NARIZ-FORM TODOS
  getListaNarizFormaTodos(){
    return this.http.get<NarizFormaModel[]>(`${environment.BASE_URL}/nariz-forma`);
  }
  //FIN RETORNAR NARIZ-FORM TODOS

  //RETORNAR NARIZ-TAMANIO TODOS
  getListaNarizTamanio(){
    return this.http.get<NarizTamanioModel[]>(`${environment.BASE_URL}/nariz-tamanio`);
  }
  //FIN RETORNAR NARIZ-TAMANIO TODOS

  //RETORNAR NIVEL-EDUCACION TODOS
  getListaNivelEducacionTodos(){
    return this.http.get<NivelEducacionModel[]>(`${environment.BASE_URL}/nivel-educacion`);
  }
  //FIN RETORNAR NIVEL-EDUCACION TODOS

  //RETORNAR OFICIO TODOS
  getListaOficioTodos(){
    return this.http.get<OficioModel[]>(`${environment.BASE_URL}/oficio`);
  }
  //FIN RETORNAR OFICIO TODOS

  //RETORNAR OJOS-COLOR TODOS
  getListaOjosColorTodos(){
    return this.http.get<OjosColorModel[]>(`${environment.BASE_URL}/ojos-color`);
  }
  //FIN RETORNAR OJOS-COLOR TODOS

  //RETORNAR OJOS-TAMANIO TODOS
  getListaOjosTamanioTodos(){
    return this.http.get<OjosTamanioModel[]>(`${environment.BASE_URL}/ojos-tamanio`);
  }
  //FIN RETORNAR OJOS-TAMANIO TODOS

  //RETORNAR PABELLON TODOS
  getListaPabellonTodos(){
    return this.http.get<PabellonModel[]>(`${environment.BASE_URL}/pabellon`);
  }
  //FIN RETORNAR PABELLON TODOS

  //RETORNAR PELO-COLOR TODOS
  getListaPeloColorTodos(){
    return this.http.get<PeloColorModel[]>(`${environment.BASE_URL}/pelo-color`);
  }
  //FIN RETORNAR PELO-COLOR TODOS

  //RETORNAR PELO-TIPO TODOS
  getListaPeloTipoTodos(){
    return this.http.get<PeloTipoModel[]>(`${environment.BASE_URL}/pelo-tipo`);
  }
  //FIN RETORNAR PELO-TIPO TODOS

  //RETORNAR PIEL TODOS
  getListaPielTodos(){
    return this.http.get<PielModel[]>(`${environment.BASE_URL}/piel`);
  }
  //FIN RETORNAR PIEL TODOS

  //RETORNAR PROVINCIA TODOS
  getListaProvinciaTodos(){
    return this.http.get<ProvinciaModel[]>(`${environment.BASE_URL}/provincia`);
  }
  //FIN RETORNAR PROVINCIA TODOS

  //RETORNAR REINCIDENCIA TODOS
  getListaReincidenciaTodos(){
    return this.http.get<ReincidenciaModel[]>(`${environment.BASE_URL}/reincidencia`);
  }
  //FIN RETORNAR REINCIDENCIA TODOS

  //RETORNAR REINGRESO TODOS
  getListaReingresoTodos(){
    return this.http.get<ReingresoModel[]>(`${environment.BASE_URL}/reingreso`);
  }
  //FIN RETORNAR REINGRESO TODOS

  //RETORNAR RELIGION TODOS
  getListaReligionTodos(){
    return this.http.get<ReligionModel[]>(`${environment.BASE_URL}/religion`);
  }
  //FIN RETORNAR RELIGION TODOS

  //RETORNAR SEXO TODOS
  getListaSexoTodos(){
    return this.http.get<SexoModel[]>(`${environment.BASE_URL}/sexo`);
  }
  //FIN RETORNAR SEXO TODOS

  //RETORNAR TIPO-CONDENA TODOS
  getListaTipoCondenaTodos(){
    return this.http.get<TipoCondenaModel[]>(`${environment.BASE_URL}/tipo-condena`);
  }
  //FIN RETORNAR TIPO-CONDENA TODOS

  //RETORNAR TIPO-DEFENSOR TODOS
  getListaTipoDefensorTodos(){
    return this.http.get<TipoDefensorModel[]>(`${environment.BASE_URL}/tipo-defensor`);
  }
  //FIN RETORNAR TIPO-DEFENSOR TODOS

  //RETORNAR TIPO-DELITO TODOS
  getListaTipoDelitoTodos(){
    return this.http.get<TipoDelitoModel[]>(`${environment.BASE_URL}/tipo-delito`);
  }
  //FIN RETORNAR TIPO-DELITO TODOS

  //RETORNAR UNIDAD TODOS
  getListaUnidadTodos(){
    return this.http.get<UnidadModel[]>(`${environment.BASE_URL}/unidad`);
  }
  //FIN RETORNAR UNIDAD TODOS
  
  
  //RETORNAR ZONA-RESIDENCIA TODOS
  getListaZonaResidenciaTodos(){
    return this.http.get<ZonaResidenciaModel[]>(`${environment.BASE_URL}/zona-residencia`);
  }
  //FIN RETORNAR ZONA-RESIDENCIA TODOS
}
