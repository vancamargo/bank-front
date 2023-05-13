import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { ModalDialogComponent } from 'src/shared/components/modal-dialog/modal-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Client } from 'src/shared/models/client.interface';
import { ModalDialogSucessOrErrorComponent } from 'src/shared/components/modal-dialog-sucess-or-error/modal-dialog-sucess-or-error.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'cpf',
    'dateRegister',
    'birtDate',
    'monthlyIncome',
    'email',
    'action',
  ];
  dataSource: MatTableDataSource<Client>;
  color = '#11728B';
  radiusInit = '40px 0px 0px 40px';
  radiusFinal = ' 0px 0px 200px 0px';
  radiusBorder = '50px';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    private clienteService: ClientService,
    public dialogRefErrorOrSucess: MatDialog
  ) {}

  ngOnInit() {
    this.getAllClients();
  }

  openDialog() {
    this.dialog
      .open(ModalDialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getAllClients();
        }
      });
  }

  getAllClients() {
    this.clienteService.getClient().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {},
    });
  }

  editProdut(row: any) {
    this.dialog
      .open(ModalDialogComponent, {
        width: '40%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'edit') {
          this.getAllClients();
        }
      });
  }

  searchClient(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalErrorOrSucess(sucesseOrError: string) {
    const dialogRef = this.dialogRefErrorOrSucess.open(
      ModalDialogSucessOrErrorComponent,
      {
        width: '382px',
        height: '286px',
        data: sucesseOrError,
      }
    );

    dialogRef.afterClosed();
  }

  deleteClient(id: number) {
    this.clienteService.deleteClient(id).subscribe({
      next: (res) => {
        this.openModalErrorOrSucess('delete');
        this.getAllClients();
      },
      error: (err) => {},
    });
  }
}
