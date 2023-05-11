import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ButtonPrimaryModule } from '../button-primary/button-primary.module';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ButtonPrimaryModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ModalDialogComponent],
  exports: [ModalDialogComponent, FormsModule, ReactiveFormsModule],
})
export class ModalDialogModule {}
