import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarModule } from '../navbar/navbar.module';
import { ButtonPrimaryModule } from '../button-primary/button-primary.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    NavbarModule,
    ButtonPrimaryModule,
    MatDialogModule,
  ],
  exports: [DataTableComponent],
})
export class DataTableModule {}
