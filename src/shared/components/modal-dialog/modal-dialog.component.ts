import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { GenericValidator } from '../../validators/validatorCpf';
import { NgxAgeValidator } from 'ngx-age-validator';

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
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editDataClient: any,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, GenericValidator.isValidCpf()]],
      dateRegister: [''],
      birtDate: ['', NgxAgeValidator(18, 60)],
      monthlyIncome: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.initValidatorAge();
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
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    console.log(this.clientForm);
    if (!this.editDataClient) {
      if (this.clientForm.valid) {
        this.clientForm.controls['dateRegister'].setValue(
          new Date().toUTCString()
        );
        this.clienteService.postClient(this.clientForm.value).subscribe({
          next: (res) => {
            this.clientForm.reset();
            this.dialogRef.close('save');
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

  updateClient() {
    this.clienteService
      .putClient(this.clientForm.value, this.editDataClient.id)
      .subscribe({
        next: (res) => {
          this.clientForm.reset();
          this.dialogRef.close('edit');
          alert('save');
        },
        error: (err) => {
          alert('error');
        },
      });
  }
}
