import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {LoginUserRequest, RegisterUserRequest} from "../data-models/user.model";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Store} from "@ngrx/store";
import {AuthState} from "@jobs-app/auth/data-access";


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private _auth: Auth) {}

  register(credentials: RegisterUserRequest): Observable<any> {
    return of(createUserWithEmailAndPassword(this._auth, credentials.username, credentials.password))
  }

  login(credentials: LoginUserRequest): Promise<any> {
    return signInWithEmailAndPassword(this._auth, credentials.username, credentials.password);
  }

  logout() :Promise<any> {
    return this._auth.signOut();
  }
}
