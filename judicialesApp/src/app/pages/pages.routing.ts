import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';
import { InternosAgregarComponent } from './internos/agregar/internos-agregar.component';
import { InternosEditarComponent } from './internos/editar/internos-editar.component';
import { InternosListarComponent } from './internos/listar/internos-listar.component';
import { UsuariosAgregarComponent } from './usuarios/agregar/usuarios-agregar.component';
import { UsuariosListarComponent } from './usuarios/listar/usuarios-listar.component';
import { UsuariosEditarComponent } from './usuarios/editar/usuarios-editar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path:'', component: DashboardComponent},
            {path:'agregar', component: AgregarComponent},
            {path:'editar', component: EditarComponent},
            {path:'listar', component: ListarComponent},
            {path:'usuarios', component: UsuariosComponent},
            {path:'agregar-interno', component: InternosAgregarComponent},
            {path:'editar-interno/:prontuario', component: InternosEditarComponent},
            {path:'listar-internos', component: InternosListarComponent},
            {path:'agregar-usuario', component: UsuariosAgregarComponent},
            {path:'editar-usuario/:id', component: UsuariosEditarComponent},  
            {path:'listar-usuarios', component: UsuariosListarComponent}
            

        ]        
    }
    // ,
    // {path: 'internos',
    //     component: PagesComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         {path:'agregar-interno', component: AgregarInternosComponent},
    //         {path:'listar-internos', component: ListarInternosComponent}                
    //     ]        
    // }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
