import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { GenericValidator } from '../../validators/validator-cpf.validators';

import { NgxAgeValidator } from 'ngx-age-validator';
import { ValidatorName } from 'src/shared/validators/validator-name.validators';
import { ModalDialogSucessOrErrorComponent } from '../modal-dialog-sucess-or-error/modal-dialog-sucess-or-error.component';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  clientForm!: FormGroup;
  btnAction: string = 'Salvar';

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    public dialogRefErrorOrSucess: MatDialog,
    private formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    @Inject(MAT_DIALOG_DATA) public editDataClient: any,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.dateAdapter.setLocale('pt-br');
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required, ValidatorName.validateFullName()]],
      cpf: ['', [Validators.required, GenericValidator.isValidCpf()]],
      dateRegister: [''],
      birtDate: ['', [NgxAgeValidator(18, 60), Validators.required]],
      monthlyIncome: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
    this.editClient();
  }

  editClient() {
    if (this.editDataClient) {
      this.btnAction = 'Editar';
      this.clientForm.controls['name'].setValue(this.editDataClient.name);
      this.clientForm.controls['cpf'].setValue(this.editDataClient.cpf);
      this.clientForm.controls['dateRegister'].setValue(
        this.editDataClient.dateRegister
      );
      this.clientForm.controls['birtDate'].setValue(
        this.editDataClient.birtDate
      );
      this.clientForm.controls['monthlyIncome'].setValue(
        this.editDataClient.monthlyIncome
      );
      this.clientForm.controls['email'].setValue(this.editDataClient.email);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    if (!this.editDataClient) {
      if (this.clientForm.valid) {
        this.clientForm.controls['dateRegister'].setValue(
          new Date().toUTCString()
        );
        this.clienteService.postClient(this.clientForm.value).subscribe({
          next: (res) => {
            this.dialogRef.close('save');
            this.clientForm.reset();
            this.openModalErrorOrSucess('sucess');
          },
          error: (err) => {
            this.openModalErrorOrSucess('error');
          },
        });
      }
    } else {
      this.updateClient();
    }
  }

  openModalErrorOrSucess(sucesseOrError: string) {
    const dialogRef = this.dialogRefErrorOrSucess.open(
      ModalDialogSucessOrErrorComponent,
      {
        width: '382px',
        height: '286px',
        data: sucesseOrError,
        panelClass: 'dialog-sucess-error',
      }
    );

    dialogRef.afterClosed();
  }

  updateClient() {
    this.clienteService
      .putClient(this.clientForm.value, this.editDataClient.id)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('edit');
          this.clientForm.reset();
          this.openModalErrorOrSucess('sucess');
        },
        error: (err) => {
          this.openModalErrorOrSucess('error');
        },
      });
  }
}
