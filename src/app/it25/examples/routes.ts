import { Routes } from '@angular/router';
import { HeaderMenuHorExampleComponent } from './header-menu-hor-example/header-menu-hor-example.component';
import { HeaderMenuVerExampleComponent } from './header-menu-ver-example/header-menu-ver-example.component';
import { HeaderMenuSideExampleComponent } from './header-menu-side-example/header-menu-side-example.component';

export const IT25EXAMPLES_ROUTES = [
  { path: 'menu-hor', component: HeaderMenuHorExampleComponent },
  { path: 'menu-ver', component: HeaderMenuVerExampleComponent },
  { path: 'menu-side', component: HeaderMenuSideExampleComponent },
] satisfies Routes;
