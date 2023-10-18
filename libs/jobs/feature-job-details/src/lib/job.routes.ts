import { Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';
import {AppAuthGuard} from "../../../../auth/data-access/src/lib/services/auth-guard";

export const JOB_ROUTES: Routes = [
  {
    path: ':slug',
    component: JobDetailsComponent,
  },
];
