import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPagesComponent } from './components/error-pages.component';

export const errorPagesRoutes: Routes = [
  {
    path: '',
    component: ErrorPagesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorPagesRoutes)
  ],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }