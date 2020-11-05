import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesComponent } from './components/error-pages.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ],
  declarations: [ErrorPagesComponent]
})
export class ErrorPagesModule { }
