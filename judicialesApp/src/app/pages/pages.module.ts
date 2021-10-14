import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import { UsuariosAgregarComponent } from './usuarios/agregar/usuarios-agregar.component';
import { UsuariosListarComponent } from './usuarios/listar/usuarios-listar.component';
import { InternosListarComponent } from './internos/listar/internos-listar.component';
import { InternosAgregarComponent } from './internos/agregar/internos-agregar.component';
import { InternosEditarComponent } from './internos/editar/internos-editar.component';
import { UsuariosEditarComponent } from './usuarios/editar/usuarios-editar.component';

// import { FullCalendarModule } from 'primeng/fullcalendar'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
//import interactionPlugin from '@fullcalendar/'; // a plugin!
//import { AppComponent } from './app.component';


// import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin
// ]);
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);




@NgModule({
  declarations: [
    EditarComponent,
    AgregarComponent,
    ListarComponent,
    PagesComponent,
    DashboardComponent,
    UsuariosComponent,
    UsuariosAgregarComponent,
    UsuariosListarComponent,
    InternosListarComponent,
    InternosAgregarComponent,
    InternosEditarComponent,
    UsuariosEditarComponent

  ],
  exports: [
    EditarComponent,
    AgregarComponent,
    ListarComponent,
    PagesComponent,
    DashboardComponent,
    UsuariosComponent,
    UsuariosAgregarComponent,
    UsuariosEditarComponent,
    UsuariosListarComponent,
    InternosListarComponent,
    InternosAgregarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    TabViewModule,
    FullCalendarModule // register FullCalendar with you app
  ]
})
export class PagesModule { }
