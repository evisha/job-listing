import { Routes } from '@angular/router';
/*import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { articleEffects, articleFeature, articlesEffects } from '@realworld/articles/data-access';
import { ArticleGuardService } from './article-guard.service';*/
import { JobDetailsComponent } from './job-details.component';

export const JOB_ROUTES: Routes = [
  {
    path: ':slug',
    component: JobDetailsComponent,
    //providers: [],
    //canActivate: [],
  },
];
