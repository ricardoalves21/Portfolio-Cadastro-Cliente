import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  @Input() listaClientes: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly exibirAsColunas = ['nome', 'email', 'telefone', 'endereco']

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(cliente: Cliente) {
    this.edit.emit(cliente);
  }

  onRemove(cliente: Cliente) {
    this.remove.emit(cliente);
  }

}
