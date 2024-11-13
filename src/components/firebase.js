// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlMBQqyAemd_h5HKN6aXnf7WvGbKmd9E",
  authDomain: "green-sight.firebaseapp.com",
  projectId: "green-sight",
  storageBucket: "green-sight.firebasestorage.app",
  messagingSenderId: "772634058788",
  appId: "1:772634058788:web:d0f9b565c8229c71aa38b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app);
export const db = getFirestore(app)


export default app;