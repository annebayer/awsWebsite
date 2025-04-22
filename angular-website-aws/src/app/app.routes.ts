import { Routes } from '@angular/router';
import {TestComponent} from './unterseite-test/test.component';
import {StartseiteComponent} from './startseite/startseite.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/startseite',
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: StartseiteComponent
  },
];
