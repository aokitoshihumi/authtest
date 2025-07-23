// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCWBwYqIxOS7795SkzJfQFlYYeWRhErsMQ",
  authDomain: "test-todo-367fe.firebaseapp.com",
  projectId: "test-todo-367fe",
  storageBucket: "test-todo-367fe.firebasestorage.app",
  messagingSenderId: "74162450252",
  appId: "1:74162450252:web:2fe39d56b6f3d6af51e9e9",
  measurementId: "G-V457E4S8H6"
};

// Initialize Firebase
//firebaseConfigをインスタンス化している。
export const app = getApps().length === 0 
? initializeApp(firebaseConfig) 
: getApps()[0];
//authを使うためにgetしている。
export const auth = getAuth(app);
export const db = getFirestore(app);