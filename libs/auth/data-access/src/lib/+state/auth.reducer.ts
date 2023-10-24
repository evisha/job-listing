import {createReducer, on, createFeature} from '@ngrx/store';
import {User} from "../data-models/user.model";
import {authActions} from "./auth.actions";

export interface AuthState {
  loggedIn: boolean;
  user: any; //User;
}

export const authInitialState = {
  loggedIn: false,
  user: {
    email: '',
    token: '',
  },
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(authActions.getUserSuccess, (state, action) => ({
      ...state,
      loggedIn: true,
      user: action.user,
    })),
  ),
});

