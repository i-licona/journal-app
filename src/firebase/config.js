// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzz-8bNYi75c87RW0sMEsX15N7SOiy3vY",
  authDomain: "react-journal-29db4.firebaseapp.com",
  projectId: "react-journal-29db4",
  storageBucket: "react-journal-29db4.appspot.com",
  messagingSenderId: "856892441962",
  appId: "1:856892441962:web:4d4fda888048f9a98b1113"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//authentication
export const FirebaseAuth = getAuth(FirebaseApp);
//firestore
export const FirebaseDB = getFirestore(FirebaseApp);