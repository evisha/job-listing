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
    private auth: Auth,
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
      username: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value
    }

    // Initialize Firebase Authentication and get a reference to the service
    signInWithEmailAndPassword(this.auth, credentials.username, credentials.password)
      .then((userCredential) => {
        console.log(11, userCredential)
        // Signed up
        const user = userCredential.user;
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
    localStorage.setItem('at', response?.token?.access_token || '');
    localStorage.setItem('rt', response?.token?.refresh_token || '');
  }
}
