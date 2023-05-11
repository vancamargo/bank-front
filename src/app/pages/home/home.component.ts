import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { ModalDialogComponent } from 'src/shared/components/modal-dialog/modal-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Client } from 'src/app/models/client.interface';

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
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.getAllClients();
  }

  openDialog() {
    this.dialog
      .open(ModalDialogComponent, {
        width: '70%',
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
        console.log(res);
      },
      error: (err) => {
        alert('error');
      },
    });
  }

  editProdut(row: any) {
    this.dialog
      .open(ModalDialogComponent, {
        width: '70%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'edit') {
          this.getAllClients();
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteClient(id: number) {
    this.clienteService.deleteClient(id).subscribe({
      next: (res) => {
        alert('delete Sucess');
        this.getAllClients();
      },
      error: (err) => {
        alert('error delete');
      },
    });
  }
}
