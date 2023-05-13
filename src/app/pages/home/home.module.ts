import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from 'src/shared/components/navbar/navbar.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchSgvModule } from 'src/shared/components/svgs/search-sgv/search-sgv.module';
import { CPFPipe } from 'src/shared/pipes/cpf.pipe';
import { ButtonPrimaryModule } from 'src/shared/components/button-primary/button-primary.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NavbarModule,
    ButtonPrimaryModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SearchSgvModule,
  ],
  declarations: [HomeComponent, CPFPipe],
  exports: [HomeComponent, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class HomeModule {}
