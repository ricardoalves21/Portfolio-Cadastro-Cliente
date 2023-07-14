import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './componentes/cadastro/listar-clientes/listar-clientes.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'listarClientes',
    pathMatch: 'full',
  },
  {
    path: 'listarClientes',
    component: ListarClientesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
