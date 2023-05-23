// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAmGFtBWokGZs91ng-FjmpGZumBSARO6uY",
  authDomain: "docs-a16c5.firebaseapp.com",
  projectId: "docs-a16c5",
  storageBucket: "docs-a16c5.appspot.com",
  messagingSenderId: "542141955689",
  appId: "1:542141955689:web:a8552586179a504c68ecf8",
  measurementId: "G-GHMBMZJNER"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
