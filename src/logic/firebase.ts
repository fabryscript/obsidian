// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz35cEa0vPI9yXF7A0Kx6Gvve95yn0PEk",
  authDomain: "obsidian-3fef9.firebaseapp.com",
  projectId: "obsidian-3fef9",
  storageBucket: "obsidian-3fef9.appspot.com",
  messagingSenderId: "699103247997",
  appId: "1:699103247997:web:9191569c7020f853b1bb14",
  measurementId: "G-EPBZL8YYT8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const firestore = getFirestore(app)