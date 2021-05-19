import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path:'agregar', component: AgregarComponent},
            {path:'editar', component: EditarComponent},
            {path:'listar', component: ListarComponent}
        
        ]    
    
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
