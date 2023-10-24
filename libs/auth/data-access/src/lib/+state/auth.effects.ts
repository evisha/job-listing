import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {switchMap, catchError, of, map} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {authActions} from "./auth.actions";

export const getUser$ = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.getUser),
      switchMap(() =>
        authService.user().pipe(
          map((data) => authActions.getUserSuccess({ user: data.user })),
          catchError((error) => of(authActions.getUserFailure({ error }))),
        ),
      ),
    );
  },
  { functional: true },
);
