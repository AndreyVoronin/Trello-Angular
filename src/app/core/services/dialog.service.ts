import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { dialogsMap } from 'src/app/shared/dialogs';
import { Dialog, DialogOptions } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private defaultDialogOptions: DialogOptions = {
    type: Dialog.CardDialogComponent
  };
  private defaultDialogConfig: MatDialogConfig = {
    height: '50%',
    width: '50%',
    panelClass: 'custom-dialog'
  };

  constructor(public dialog: MatDialog) { }

  openDialog(dialogOptions: DialogOptions, dialogConfig?: MatDialogConfig): void {
    const data = {
      ...this.defaultDialogOptions,
      ...dialogOptions.data
    };
    const config = {
      ...this.defaultDialogConfig,
      ...(dialogConfig || {}),
      data
    };
    const dialogComponent = dialogsMap[data.type];
    const boardId = this.dialog.open(dialogComponent, config);
  }

}
