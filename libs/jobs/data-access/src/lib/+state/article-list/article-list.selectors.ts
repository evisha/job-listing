import { createSelector } from '@ngrx/store';
import { articleListFeature } from './article-list.reducer';

const { selectArticles, selectListConfig } = articleListFeature;
export const selectArticleEntities = createSelector(selectArticles, (j) => j.jobs);
export const selectArticlesCount = createSelector(selectArticles, (j) => j.jobsCount);
export const isLoading = createSelector(selectArticles, (j) => j.loading);
export const selectTotalPages = createSelector(selectArticlesCount, selectListConfig, (jobsCount, config) => {
  return Array.from(new Array(Math.ceil(jobsCount / (config?.filters?.limit ?? 1))), (val, index) => index + 1);
});

export const articleListQuery = {
  selectArticles,
  selectArticleEntities,
  selectListConfig,
  selectArticlesCount,
  isLoading,
  selectTotalPages,
};
