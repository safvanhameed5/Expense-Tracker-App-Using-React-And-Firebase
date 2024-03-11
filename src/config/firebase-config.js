// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzCTe6e31bFZy_oz7tPLTLzpatB0RKrXQ",
  authDomain: "expense-tracker-66ce4.firebaseapp.com",
  projectId: "expense-tracker-66ce4",
  storageBucket: "expense-tracker-66ce4.appspot.com",
  messagingSenderId: "740334149625",
  appId: "1:740334149625:web:b060bdfad905805e09a728",
  measurementId: "G-K715CSRF2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)