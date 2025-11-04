import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',  // ← NUEVO
    loadComponent: () => import('./page/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./page/menu/menu.page').then(m => m.MenuPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./page/search/search.page').then(m => m.SearchPage)
  },
  {
    path: 'producto',
    loadComponent: () => import('./page/producto/producto.page').then(m => m.ProductoPage)
  },
];