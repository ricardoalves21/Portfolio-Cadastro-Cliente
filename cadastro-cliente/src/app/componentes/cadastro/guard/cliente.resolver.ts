import { ResolveFn } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { inject } from '@angular/core'

export const clienteResolver: ResolveFn<Cliente> = (route, state) => {

  if(route.params && route.params['id']) {
    return inject(ClienteService).buscarCursoId(route.params['id']);
  }
  return { _id: '', nome: '', email: '', telefone: '', endereco: '' };
};
