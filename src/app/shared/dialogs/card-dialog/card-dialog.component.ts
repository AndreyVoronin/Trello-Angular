import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOptions } from '@core/models';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  tasks: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogOptions) { }

  confirm(): void {
    this.data?.onConfirm();
  }

  ngOnInit() {
    this.tasks = this.data;
  }
}
