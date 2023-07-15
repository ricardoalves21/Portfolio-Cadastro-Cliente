import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  //O atributo 'listaClientes' é um componente PAI, por isso ele fornece as informações para o componente FILHO 'cliente'
  //O 'listaClientes' tambem precisa seguir o mesmo tipo definido na interface 'Cliente'
  //A nossa 'listaClientes' carregará os objetos que irão popular nosso banco de dados
  //Esta 'listaClientes' virá do nosso backend
  listaClientes: Cliente[] = [];

  constructor(private service: ClienteService) {}

  readonly exibirAsColunas = ['_id', 'nome', 'email', 'telefone', 'endereco']

ngOnInit(): void {
    this.service.listar().subscribe((listaClientes) => {
      this.listaClientes = listaClientes;
    })
  }

}
