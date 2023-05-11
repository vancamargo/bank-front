import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  clientForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      dateRegister: [''],
      birtDate: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
    });
    this.editClient();
    console.log(this.editData);
  }

  editClient() {
    if (this.editData) {
      this.clientForm.controls['name'].setValue(this.editData.name);
      this.clientForm.controls['cpf'].setValue(this.editData.cpf);
      this.clientForm.controls['dateRegister'].setValue(
        this.editData.dateRegister
      );
      this.clientForm.controls['birtDate'].setValue(this.editData.birtDate);
      this.clientForm.controls['monthlyIncome'].setValue(
        this.editData.monthlyIncome
      );
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
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
  }
}
