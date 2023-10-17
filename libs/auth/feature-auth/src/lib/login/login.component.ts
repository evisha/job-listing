import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {
  Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAdditionalUserInfo,
  OAuthProvider,
  linkWithPopup,
  unlink,
  updateEmail,
  updatePassword,
  User,
  reauthenticateWithPopup,
  authState,
  onAuthStateChanged
} from '@angular/fire/auth';
import {AuthService} from "../../../../data-access/src/lib/services/auth.service";
import {Store} from "@ngrx/store";
import { AuthState} from "@jobs-app/auth/data-access";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _auth: Auth,
    private aus: AuthService,
    private store: Store<AuthState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: ''
    });
  }

  onSubmit(): void {

    const credentials = {
      auth: this._auth,
      username: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value
    }
    this.aus.login(credentials).then((userCredential) => {
      // Signed up
      const user = userCredential;
      console.log(userCredential)
      this.fillCache(userCredential.user);
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  private fillCache(response: any) {

    localStorage.setItem('accessToken', response?.accessToken || '');
    localStorage.setItem('refreshToken', response?.refreshToken || '');
/*    localStorage.setItem('username', response?.first_name + ' ' + response?.last_name);
    localStorage.setItem('roles', response?.roles?.reduce((a: any, c: any) => {
      return a = !!a ? (a + ' , ' + c.name) : c.name;
    }, ''));
    localStorage.setItem('functions', response?.functions?.reduce((a: any, c: any) => {
      return a = !!a ? (a + ',' + c.name) : c.name;
    }, ''));*/
  }

}
