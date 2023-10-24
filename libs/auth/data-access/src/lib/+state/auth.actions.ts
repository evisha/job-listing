import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {User} from "../data-models/user.model";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    getUser: emptyProps(),
    getUserFailure: props<{ error: Error }>(),
    getUserSuccess: props<{ user: User }>(),
  },
});
