import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleListConfig } from './article-list.reducer';

export const articleListActions = createActionGroup({
  source: 'Article List',
  events: {
    setListPage: props<{ page: number }>(),
    setListConfig: props<{ config: ArticleListConfig }>(),
    loadArticles: emptyProps(),
    loadArticlesFailure: props<{ error: Error }>(),
    loadArticlesSuccess: props<{ articles: any[]; articlesCount: number }>(),
  },
});
