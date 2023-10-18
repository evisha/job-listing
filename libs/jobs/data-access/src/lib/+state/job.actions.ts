import { createActionGroup, props } from '@ngrx/store';

export const jobActions = createActionGroup({
  source: 'Articles',
  events: {
    favorite: props<{ slug: string }>(),
    favoriteFailure: props<{ error: Error }>(),
    favoriteSuccess: props<{ article: any }>(),
    unfavorite: props<{ slug: string }>(),
    unfavoriteFailure: props<{ error: Error }>(),
    unfavoriteSuccess: props<{ article: any }>(),
  },
});
