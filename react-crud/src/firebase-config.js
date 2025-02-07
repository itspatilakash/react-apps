// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfYCbFpe3Nde3ISrDA8DxmxZHzeLznW8E",
  authDomain: "fir-crud-a88fe.firebaseapp.com",
  projectId: "fir-crud-a88fe",
  storageBucket: "fir-crud-a88fe.firebasestorage.app",
  messagingSenderId: "479029806111",
  appId: "1:479029806111:web:9653754e9dac11728e412a",
  measurementId: "G-JZTLYDE8VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
     