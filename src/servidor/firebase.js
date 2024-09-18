// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPGfA2QcrUuf58KEyYSeJ7WG7FOltNAo",
  authDomain: "projeto-web-ii-b3b32.firebaseapp.com",
  projectId: "projeto-web-ii-b3b32",
  storageBucket: "projeto-web-ii-b3b32.appspot.com",
  messagingSenderId: "494014469556",
  appId: "1:494014469556:web:8a8e33c0fbd5c58a858ee1",
  measurementId: "G-5PMTK6KJVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);