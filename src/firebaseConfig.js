// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjfrxvT1DfbgHSA0hxUzzzSl_ntzD4RkI",
  authDomain: "crudoperationsso.firebaseapp.com",
  projectId: "crudoperationsso",
  storageBucket: "crudoperationsso.appspot.com",
  messagingSenderId: "34366997574",
  appId: "1:34366997574:web:0ce88cb3550b0d3983b647",
  measurementId: "G-5K8PLNL5H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

