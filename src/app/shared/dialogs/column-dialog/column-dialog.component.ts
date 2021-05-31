import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOptions } from '@core/models';
import { Column } from '@core/models/column.model';

@Component({
  selector: 'app-column-dialog',
  templateUrl: './column-dialog.component.html',
  styleUrls: ['./column-dialog.component.scss']
})
export class ColumnDialogComponent implements OnInit {
  column: Column;
  columnItems: FormGroup;

  constructor(public dialogRef: MatDialogRef<ColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions) { }

  ngOnInit() {
    this.column = this.data as Column;
    this.columnItems = new FormGroup({
      title: new FormControl(this.column.title, [Validators.required] ),
      description: new FormControl(this.column.description)
    }, { updateOn: 'blur' });
    this.columnItems.statusChanges.subscribe(value => console.log(value) )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFieldEmpty(field: string): boolean {
    return this.columnItems.get(field).hasError('required');
  }

}
