import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { articleListActions } from './article-list.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { JobsService } from '../../services/articles.service';
import { articleListQuery } from './article-list.selectors';

export const setListPage$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(articleListActions.setListPage),
      map(() => articleListActions.loadArticles()),
    );
  },
  { functional: true },
);

/*export const setListTag$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(articleListActions.setListConfig),
      map(() => articleListActions.loadArticles()),
    );
  },
  { functional: true },
);*/

export const loadJobs$ = createEffect(
  (actions$ = inject(Actions), store = inject(Store), jobsService = inject(JobsService)) => {
    return actions$.pipe(
      ofType(articleListActions.loadArticles),
      concatLatestFrom(() => store.select(articleListQuery.selectListConfig)),
      concatMap(([_, config]) =>
        jobsService.query(config).pipe(
          map((results) =>
            articleListActions.loadArticlesSuccess({
              articles: results.jobs,
              articlesCount: results.jobsCount,
            }),
          ),
          catchError((error) => of(articleListActions.loadArticlesFailure({ error }))),
        ),
      ),
    );
  },
  { functional: true },
);
