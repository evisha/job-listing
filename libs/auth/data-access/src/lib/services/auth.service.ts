import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {signInWithEmailAndPassword} from "@angular/fire/auth";


@Injectable({ providedIn: 'root' })
export class AuthService {

/*  user(): Observable<any> {
    //return this.apiService.get<any>('/user');
  }*/

  login(credentials): Promise<any> {
    return signInWithEmailAndPassword(credentials.auth, credentials.username, credentials.password)
    //return this.apiService.post<any, any>('/users/login', { user: credentials });
  }

/*  register(credentials): Observable<any> {
    //return this.apiService.post<any, any>('/users', { user: credentials });
  }*/
}
