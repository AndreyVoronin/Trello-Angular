import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { CardDialogComponent } from './dialogs/card-dialog/card-dialog.component';
import { ColumnDialogComponent } from './dialogs/column-dialog/column-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmationDialogComponent,
    CardDialogComponent,
    ColumnDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HeaderComponent,
    ConfirmationDialogComponent,
    CardDialogComponent,
    ColumnDialogComponent
  ]
})
export class SharedModule { }
