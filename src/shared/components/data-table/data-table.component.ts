import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(ModalDialogComponent, {
      width: '70%',
    });
  }
}
