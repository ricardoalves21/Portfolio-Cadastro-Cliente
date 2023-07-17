import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-caixa-de-dialogo',
  templateUrl: './caixa-de-dialogo.component.html',
  styleUrls: ['./caixa-de-dialogo.component.css']
})
export class CaixaDeDialogoComponent {

  constructor(
    public dialogRef: MatDialogRef<CaixaDeDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }

}
