import { createFeature, createReducer, on } from '@ngrx/store';
import { articleActions } from './article.actions';
import { articlesActions } from '../articles.actions';
import { articleEditActions } from '../article-edit/article-edit.actions';

export interface ArticleState {
  data: any; //Article;
  comments: Comment[];
  loading: boolean;
  loaded: boolean;
}

export const articleInitialState: ArticleState = {
  data: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
      loading: false,
    },
  },
  comments: [],
  loaded: false,
  loading: false,
};

export const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    articleInitialState,
    on(articleActions.loadArticleSuccess, (state, action) => ({
      ...state,
      data: action.article,
      loaded: true,
      loading: false,
    })),
    on(articleActions.loadArticleFailure, (state) => ({
      ...state,
      data: articleInitialState.data,
      loaded: false,
      loading: false,
    })),

    on(
      articleActions.initializeArticle,
      articleEditActions.publishArticleSuccess,
      articleActions.deleteArticleFailure,
      (state) => articleInitialState,
    ),
    on(articlesActions.favoriteSuccess, articlesActions.unfavoriteSuccess, (state, action) => ({
      ...state,
      data: action.article,
    })),
  ),
});
