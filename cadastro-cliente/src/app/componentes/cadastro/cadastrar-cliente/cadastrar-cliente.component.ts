import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})

export class CadastrarClienteComponent implements OnInit {

  //Lembrando que o objeto precisa conter TODOS os atributos definidos em sua interfa (tipo escolhido para este objeto)
  form = this.formBuilder.group({
    _id: [''],
    nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
    endereco: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
  });

  constructor(
    private service: ClienteService,
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    this.form.setValue({
      _id: cliente._id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      endereco: cliente.endereco
    });
  }

  cadastrarCliente() {
    this.service.salvar(this.form.value)
      .subscribe(() => this.onSuccess(), () => this.onError());

    this.router.navigate(['/listarClientes'])
    }

  cancelarCadastro() {
    this.router.navigate(['/listarClientes'])
  }

  private onSuccess() {
    this.snackBar.open('Cliente salvo com sucesso.', '', {duration: 4000});
  }

  private onError() {
    this.snackBar.open('Erro ao salvar cliente.', '', {duration: 3000});
  }

  getErrorMessage(nomeDoCampo: string) {

    const campo = this.form.get(nomeDoCampo);

    if(campo?.hasError('required')) {
      return 'Preenchimento obrigatório!';
    }
    if(campo?.hasError('minlength')) {
      const requiredLenght = campo.errors ? campo.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLenght} caracteres`;
    }
    if(campo?.hasError('maxlength')) {
      const requiredLenght = campo.errors ? campo.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo precisa ser de ${requiredLenght} caracteres`;
    }
    return 'Campo Inválido.';
  }
}
