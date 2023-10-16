import { initializeApp } from 'firebase/app';
import {getFirestore} from "@angular/fire/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCydw7W0bsAU8MO3mIwSE1zGYrxCkeJMmA",
  authDomain: "nx-test-app.firebaseapp.com",
  projectId: "nx-test-app",
  storageBucket: "nx-test-app.appspot.com",
  messagingSenderId: "283344631629",
  appId: "1:283344631629:web:31edb9f85626d98ed9a904",
  measurementId: "G-WXR6C1VKS2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
