import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  // {path: 'dashboard',
  //   component: PagesComponent,
  //   children: [
  //     {path:'agregar', component: AgregarComponent},
  //     {path:'editar', component: EditarComponent},
  //     {path:'listar', component: ListarComponent},
  //     {
  //       path:'',
  //       redirectTo:'/dashboard',
  //       pathMatch:'full'
  //     }      
  //   ]    
    
  // },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }, 
  {path:'**', component: NopagefoundComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
