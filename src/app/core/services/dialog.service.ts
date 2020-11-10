import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { dialogsMap } from 'src/app/shared/dialogs';
import { Dialog, DialogOptions } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private defaultDialogOptions: DialogOptions = {
    confirmText: 'save',
    cancelText: 'cancel'
  };
  private defaultDialogConfig: MatDialogConfig = {
    width: '100%',
    panelClass: 'custom-dialog'
  };

  constructor(public dialog: MatDialog) { }

  openDialog(dialogOptions: DialogOptions, dialogConfig?: MatDialogConfig): MatDialogRef<any> {
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
    return this.dialog.open(dialogComponent, config);    
  }

}
