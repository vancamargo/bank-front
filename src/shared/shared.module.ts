import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ButtonPrimaryModule } from './components/button-primary/button-primary.module';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { IconErrorModule } from './components/svgs/icon-error/icon-error.module';
import { IconSucessModule } from './components/svgs/icon-sucess/icon-sucess.module';
import { ModalDialogSucessOrErrorComponent } from './components/modal-dialog-sucess-or-error/modal-dialog-sucess-or-error.component';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [ModalDialogComponent, ModalDialogSucessOrErrorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonPrimaryModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatToolbarModule,
    IconSucessModule,
    IconErrorModule,
  ],

  exports: [CommonModule],
})
export class SharedModule {}
