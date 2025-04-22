import {Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {StartseiteComponent} from './startseite/startseite.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/startseite',
    pathMatch: 'full',
  },
  {
    path: 'startseite',
    component: StartseiteComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
