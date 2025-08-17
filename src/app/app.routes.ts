import { Routes } from '@angular/router';
import { DefaultLayout } from './shared/layouts/default/default.layout';
import { ShellLayout } from './shared/layouts/shell/shell.layout';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },
  {
    path: '', component: ShellLayout, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage) },
      { path: 'users/list', loadComponent: () => import('./pages/users/user-list/user-list.page').then(m => m.UserListPage) },
      { path: 'users/form', loadComponent: () => import('./pages/users/user-form/user-form.page').then(m => m.UserFormPage) }
    ]
  }
];
