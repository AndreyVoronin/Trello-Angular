import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOptions } from '@core/models';

@Component({
  selector: 'app-column-dialog',
  templateUrl: './column-dialog.component.html',
  styleUrls: ['./column-dialog.component.scss']
})
export class ColumnDialogComponent implements OnInit {
  column: any;
  title: string;

  constructor(public dialogRef: MatDialogRef<ColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions) { }

  ngOnInit() {
    this.column = this.data;
    this.title = this.column.title;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
