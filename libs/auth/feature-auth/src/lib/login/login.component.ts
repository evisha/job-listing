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
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  hide = true;
  usersCollection: any[] = []; // Array to store user data as JSON

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _auth: Auth,
    private aus: AuthService,
    private afs: AngularFirestore,
    private store: Store<AuthState>
  ) {
    this.afs.collection('users').valueChanges().subscribe((data: any[]) => {
      this.usersCollection = data;
    });
  }

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
      // Signed up check user role
      const roleID = this.usersCollection.find((el: any) => el['UID'] === userCredential.user.uid)  ? 1 : 2;
      this.fillCache(userCredential.user, roleID);
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  private fillCache(response: any, roleID: any) {
    localStorage.setItem('accessToken', response?.accessToken || '');
    localStorage.setItem('refreshToken', response?.refreshToken || '');
    localStorage.setItem('roleID', roleID);
  }
}
