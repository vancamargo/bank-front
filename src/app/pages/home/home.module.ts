import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from 'src/shared/components/navbar/navbar.module';
import { AppModule } from 'src/app/app.module';
import { DataTableModule } from 'src/shared/components/data-table/data-table.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, NavbarModule, DataTableModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
