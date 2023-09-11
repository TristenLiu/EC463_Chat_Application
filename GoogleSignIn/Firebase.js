// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtW0zFmGO-A7ilOOKOBMmLXuS-9F8OKZs",
  authDomain: "chat-app-cc20b.firebaseapp.com",
  projectId: "chat-app-cc20b",
  storageBucket: "chat-app-cc20b.appspot.com",
  messagingSenderId: "535220457587",
  appId: "1:535220457587:web:1be8bcd475dceb51141a06",
  measurementId: "G-GZTVLH2XDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
};

const analytics = getAnalytics(app);
