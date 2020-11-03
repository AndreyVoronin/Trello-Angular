import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './components/board.component';

export const boardRoutes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(boardRoutes)
  ],
  exports: [RouterModule]
})
export class BoardRoutingModule { }