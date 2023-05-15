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
    this.caseMessage();
  }

  caseMessage() {
    console.log(this.messagemSucessOrError);
    switch (this.messagemSucessOrError) {
      case 'sucess':
        this.messagemModal = 'Cliente adicionado com sucesso';
        break;
      case 'delete':
        this.messagemModal = 'Deletado com sucesso';
        break;
      case 'error':
        this.messagemModal = 'Ocorreu um erro ao salvar';
        break;
    }
  }

  closeModalDialog() {
    this.dialogRefSucessOrError.close();
  }
}
