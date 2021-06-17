import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';
import { InternosAgregarComponent } from './internos/agregar/internos-agregar.component';
import { InternosListarComponent } from './internos/listar/internos-listar.component';

const routes: Routes = [
    {path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path:'agregar', component: AgregarComponent},
            {path:'editar', component: EditarComponent},
            {path:'listar', component: ListarComponent},
            {path:'usuarios', component: UsuariosComponent},
            {path:'agregar-interno', component: InternosAgregarComponent},
            {path:'listar-internos', component: InternosListarComponent} 

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
