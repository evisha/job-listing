import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const articleActions = createActionGroup({
  source: 'Article',
  events: {
    loadArticle: props<{ slug: string }>(),
    loadArticleFailure: props<{ error: Error }>(),
    loadArticleSuccess: props<{ article: any }>(),
    deleteArticle: props<{ slug: string }>(),
    deleteArticleFailure: props<{ error: Error }>(),
    deleteArticleSuccess: emptyProps(),
    initializeArticle: emptyProps(),
    loadComments: props<{ slug: string }>(),
    loadCommentsFailure: props<{ error: Error }>(),
    loadCommentsSuccess: props<{ comments: Comment[] }>(),
    follow: props<{ username: string }>(),
    followFailure: props<{ error: Error }>(),
    followSuccess: props<{ profile: any }>(),
    unfollow: props<{ username: string }>(),
    unfollowFailure: props<{ error: Error }>(),
    unfollowSuccess: props<{ profile: any }>(),
    addComment: props<{ slug: string }>(),
    addCommentFailure: props<{ error: Error }>(),
    addCommentSuccess: props<{ comment: Comment }>(),
    deleteComment: props<{ commentId: number; slug: string }>(),
    deleteCommentFailure: props<{ error: Error }>(),
    deleteCommentSuccess: props<{ commentId: number }>(),
  },
});
