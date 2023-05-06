// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOGVRJ2zKlemg31SOp0pNPIPLKHqzh5dQ",
  authDomain: "krishan-portfolio.firebaseapp.com",
  projectId: "krishan-portfolio",
  storageBucket: "krishan-portfolio.appspot.com",
  messagingSenderId: "78705375440",
  appId: "1:78705375440:web:3c0d6ee71d8427898286d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();