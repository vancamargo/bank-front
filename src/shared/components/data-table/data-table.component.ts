import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  constructor(
    public dialog: MatDialog,
    private clienteService: ClientService
  ) {}

  // ngOnInit() {
  //   this.getAllClients();
  // }

  openDialog() {
    this.dialog.open(ModalDialogComponent, {
      width: '70%',
    });
  }

  // getAllClients() {
  //   this.clienteService.getClient().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       alert('error');
  //     },
  //   });
  // }
}
