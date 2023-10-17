import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {RegisterComponent} from "./register/register.component";
import { RouterModule} from "@angular/router";

@NgModule({
  providers: [],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    provideFirebaseApp(() =>
      initializeApp({
          apiKey: "AIzaSyCydw7W0bsAU8MO3mIwSE1zGYrxCkeJMmA",
          authDomain: "nx-test-app.firebaseapp.com",
          projectId: "nx-test-app",
          storageBucket: "nx-test-app.appspot.com",
          messagingSenderId: "283344631629",
          appId: "1:283344631629:web:31edb9f85626d98ed9a904",
          measurementId: "G-WXR6C1VKS2",
        }
      )),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  exports: []
})
export class FeatureAuthModule {}
