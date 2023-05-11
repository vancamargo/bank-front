import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonPrimaryModule } from '../shared/components/button-primary/button-primary.module';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from 'src/shared/components/modal-dialog/modal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent, ModalDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonPrimaryModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatPaginatorModule,
    HomeModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
