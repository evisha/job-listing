import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of, tap } from 'rxjs';
import { articleActions } from './article.actions';
import { JobsService } from '../../services/articles.service';



export const loadArticle$ = createEffect(
  (actions$ = inject(Actions), jobsService = inject(JobsService)) => {
    return actions$.pipe(
      ofType(articleActions.loadArticle),
      concatMap((action) =>
        jobsService.getJob(action.slug).pipe(
          map((response) => articleActions.loadArticleSuccess({ article: response.article })),
          catchError((error) => of(articleActions.loadArticleFailure(error))),
        ),
      ),
    );
  },
  { functional: true },
);

/*
export const loadComments$ = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) => {
    return actions$.pipe(
      ofType(articleActions.loadComments),
      concatMap((action) =>
        articlesService.getComments(action.slug).pipe(
          map((data) => articleActions.loadCommentsSuccess({ comments: data.comments })),
          catchError((error) => of(articleActions.loadCommentsFailure(error))),
        ),
      ),
    );
  },
  { functional: true },
);
*/

