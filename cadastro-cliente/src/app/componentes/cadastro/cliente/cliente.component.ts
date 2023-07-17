import { CaixaDeDialogoComponent } from './../caixa-de-dialogo/caixa-de-dialogo/caixa-de-dialogo.component';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrosComponent } from '../erros/erros.component';
import { MatDialog } from '@angular/material/dialog';
import { ListarClientesComponent } from '../listar-clientes/listar-clientes.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes$: Observable<Cliente[]> | null = null;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog  ) {
    this.refresh();
  }

  onError(msg: string) {
    this.dialog.open(ErrosComponent, { data: msg });
  }

  ngOnInit(): void {}

  onAdd() {
    this.refresh();
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente._id], { relativeTo: this.route })
  }

  onRemove(cliente: Cliente) {
    const dialogRef = this.dialog.open(CaixaDeDialogoComponent, {
      data: 'Tem certeza que deseja remover esse cliente'
    })
  }

  refresh() {
    this.clientes$ = this.clienteService.listar().pipe(
      catchError(() => {
        this.onError('Erro ao carregar clientes');
        return of([]);
      })
    );
  }
}
