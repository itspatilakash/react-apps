// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf3puOJvh26qacobeBPORFrVofMRtR6UE",
  authDomain: "react-auth-b72a5.firebaseapp.com",
  projectId: "react-auth-b72a5",
  storageBucket: "react-auth-b72a5.firebasestorage.app",
  messagingSenderId: "426955173292",
  appId: "1:426955173292:web:abe945e21393b8fecd9e09",
  measurementId: "G-6617QP7SH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
