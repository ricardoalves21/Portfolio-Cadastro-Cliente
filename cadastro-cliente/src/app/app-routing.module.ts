import { ClienteComponent } from './componentes/cadastro/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './componentes/cadastro/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './componentes/cadastro/cadastrar-cliente/cadastrar-cliente.component';
import { clienteResolver } from './componentes/cadastro/guard/cliente.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    component: ClienteComponent
  },
  {
    path: 'new',
    component: CadastrarClienteComponent, resolve: { cliente: clienteResolver }
  },
  {
    path: 'edit/:id',
    component: CadastrarClienteComponent, resolve: { cliente: clienteResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
