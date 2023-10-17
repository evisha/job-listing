import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {LoginUserRequest, RegisterUserRequest} from "../data-models/user.model";


@Injectable({ providedIn: 'root' })
export class AuthService {

  register(credentials: RegisterUserRequest): Observable<any> {
    return of(createUserWithEmailAndPassword(credentials.auth, credentials.username, credentials.password))
  }

  login(credentials: LoginUserRequest): Promise<any> {
    return signInWithEmailAndPassword(credentials.auth, credentials.username, credentials.password);
  }
}
