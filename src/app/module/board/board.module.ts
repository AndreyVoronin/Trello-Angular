import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    SharedModule,
    BoardRoutingModule,
    DragDropModule
  ]
})
export class BoardModule { }
