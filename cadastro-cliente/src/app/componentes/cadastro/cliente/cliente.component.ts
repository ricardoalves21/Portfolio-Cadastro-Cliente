import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    //O componente 'cliente' é FILHO, por isso é decorado com @Input()
  //A variável 'cliente' precisa ser tipada com o modelo definido na interface 'cliente.ts'
  //Agora, o contrato precisa ser seguido à risca, por isso o objeto precisa conter TODOS os atributos definidos na interface
  @Input()
  cliente!: Cliente;

  constructor() {}

  ngOnInit(): void {}

}
