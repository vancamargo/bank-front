import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from 'src/shared/components/navbar/navbar.module';
import { AppModule } from 'src/app/app.module';
import { DataTableModule } from 'src/shared/components/data-table/data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchSgvModule } from 'src/shared/components/svgs/search-sgv/search-sgv.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NavbarModule,
    DataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SearchSgvModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class HomeModule {}
