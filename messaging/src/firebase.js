// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtW0zFmGO-A7ilOOKOBMmLXuS-9F8OKZs",
  authDomain: "chat-app-cc20b.firebaseapp.com",
  databaseURL: "https://chat-app-cc20b-default-rtdb.firebaseio.com",
  projectId: "chat-app-cc20b",
  storageBucket: "chat-app-cc20b.appspot.com",
  messagingSenderId: "535220457587",
  appId: "1:535220457587:web:1be8bcd475dceb51141a06",
  measurementId: "G-GZTVLH2XDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
