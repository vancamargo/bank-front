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
import { GenericValidator } from '../../validators/validatorCpf';

import { NgxAgeValidator } from 'ngx-age-validator';
import { ValidatorName } from 'src/shared/validators/validatorName';
import { ModalDialogSucessOrErrorComponent } from '../modal-dialog-sucess-or-error/modal-dialog-sucess-or-error.component';

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

    @Inject(MAT_DIALOG_DATA) public editDataClient: any,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required, ValidatorName.spaceName()]],
      cpf: ['', [Validators.required, GenericValidator.isValidCpf()]],
      dateRegister: [''],
      birtDate: ['', NgxAgeValidator(18, 60)],
      monthlyIncome: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.editClient();
    this.initValidatorAge();
    this.openModalErrorOrSucess();
  }

  initValidatorAge() {
    this.clientForm.valueChanges.subscribe(() => {
      const controlErrors: ValidationErrors | null = this.clientForm.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            ' keyError: ' + keyError + ', err value: ',
            controlErrors[keyError]
          );
        });
      }
    });
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
    this.openModalErrorOrSucess();
    console.log(this.clientForm);
    if (!this.editDataClient) {
      if (this.clientForm.valid) {
        this.clientForm.controls['dateRegister'].setValue(
          new Date().toUTCString()
        );
        this.clienteService.postClient(this.clientForm.value).subscribe({
          next: (res) => {
            this.dialogRef.close('save');
            this.clientForm.reset();

            alert('save');
          },
          error: (err) => {
            alert('error');
          },
        });
      }
    } else {
      this.updateClient();
    }
  }

  openModalErrorOrSucess() {
    this.dialogRefErrorOrSucess.open(ModalDialogSucessOrErrorComponent, {
      width: '250px',
    });
  }

  updateClient() {
    this.clienteService
      .putClient(this.clientForm.value, this.editDataClient.id)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('edit');
          this.clientForm.reset();
          alert('save');
        },
        error: (err) => {
          alert('error');
        },
      });
  }
}
