import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      cpf: ['', Validators.required],
      dateRegister: [''],
      birtDate: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    this.productForm.controls['dateRegister'].setValue(
      new Date().toUTCString()
    );
    console.log(this.productForm.value);
  }
}
