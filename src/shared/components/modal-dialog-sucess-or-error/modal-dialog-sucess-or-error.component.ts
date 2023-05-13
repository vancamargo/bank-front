import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog-sucess-or-error',
  templateUrl: './modal-dialog-sucess-or-error.component.html',
  styleUrls: ['./modal-dialog-sucess-or-error.component.scss'],
})
export class ModalDialogSucessOrErrorComponent implements OnInit {
  public messagemModal: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public messagemSucessOrError: any,
    public dialogRefSucessOrError: MatDialogRef<ModalDialogSucessOrErrorComponent>
  ) {}

  ngOnInit() {
    if (this.messagemSucessOrError === 'sucess') {
      this.messagemModal = 'Cliente adicionado com sucesso';
    }
    if (this.messagemSucessOrError === 'delete') {
      this.messagemModal = 'Deletado com sucesso';
    } else {
      this.messagemModal = 'Ocorreu um erro ao salvar';
    }
  }

  closeModalDialog() {
    this.dialogRefSucessOrError.close();
  }
}
