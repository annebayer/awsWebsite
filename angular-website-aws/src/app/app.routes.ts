import {Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {StartseiteComponent} from './startseite/startseite.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ArticleComponent} from './components/article-list/article.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ProjectComponent} from './components/projects/one-project/project.component';

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
    path: 'webiny',
    component: ArticleComponent
  },
  {
    path: 'projekte',
    component: ProjectsComponent
  },
  {
    path: 'projekt/:slug',
    component: ProjectComponent,
    data: {
      ssr: true,
      prerender: false,
      renderMode: 'dynamic',
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
