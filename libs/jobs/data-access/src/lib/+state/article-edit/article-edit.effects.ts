import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { JobsService } from '../../services/articles.service';
import { articleEditActions } from './article-edit.actions';
import {jobsJSON} from "../../../../../feature-jobs-list/src/lib/jobs";

/*export const publishArticle$ = createEffect(
  (
    actions$ = inject(Actions),
    jobsService = inject(JobsService),
    store = inject(Store),
    router = inject(Router),
  ) => {
    return actions$.pipe(
      ofType(articleEditActions.publishArticle),
      concatLatestFrom(() => store.select(ngrxFormsQuery.selectData)),
      concatMap(([_, data]) =>
        jobsService.publishJob(data).pipe(
          tap((result) => router.navigate(['article', result.article.slug])),
          map(() => articleEditActions.publishArticleSuccess()),
          catchError((result) => of(formsActions.setErrors({ errors: result.error.errors }))),
        ),
      ),
    );
  },
  { functional: true },
);*/
