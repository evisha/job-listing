import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    //StoreModule.forFeature(fromAuth.auth, fromAuth.authReducer),
    //EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthDataAccessModule {}
