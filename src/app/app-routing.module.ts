import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'boards/:boardId',
    loadChildren: () => import('./module/board/board.module').then(m => m.BoardModule),
  },
  {
    path: '**',
    loadChildren: () => import('./module/error-pages/error-pages.module').then(m => m.ErrorPagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
