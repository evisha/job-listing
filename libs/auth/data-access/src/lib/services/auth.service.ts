import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {LoginUserRequest, RegisterUserRequest} from "../data-models/user.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private _auth: Auth, private afs: AngularFirestore) {}

  register(credentials: RegisterUserRequest): Observable<any> {
    return of(createUserWithEmailAndPassword(this._auth, credentials.username, credentials.password))
  }

  login(credentials: LoginUserRequest): Promise<any> {
    return signInWithEmailAndPassword(this._auth, credentials.username, credentials.password);
  }

  logout(): Promise<any> {
    return this._auth.signOut();
  }

  user(UID: string): Observable<any> {
    // temp data TODO Change
    return this.afs.collection("users").doc('fFKkGLoXaEfMftjybGLD').get()
  }
}
