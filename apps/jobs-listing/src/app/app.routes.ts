import {Route, RouterModule} from '@angular/router';
import {JobsListComponent} from "../../../../libs/jobs/feature-jobs-list/src";


export const appRoutes: Route[] = [
  {
    path: '',
    component: JobsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'jobs',
    loadComponent: () => import("../../../../libs/jobs/feature-jobs-list/src").then((m) => m.JobsListComponent),
  },
  {
    path: 'job',
    loadChildren: () => import("../../../../libs/jobs/feature-job-details/src").then((m) => m.JOB_ROUTES),
  },
  {
    path: 'register',
    loadChildren: () => import('../../../../libs/feature-auth/src/lib/auth.module').then(m => m.FeatureAuthModule),
  }
];

