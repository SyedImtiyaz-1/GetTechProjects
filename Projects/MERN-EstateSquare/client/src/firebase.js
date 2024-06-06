// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3ac4a.firebaseapp.com",
  projectId: "mern-estate-3ac4a",
  storageBucket: "mern-estate-3ac4a.appspot.com",
  messagingSenderId: "424867967222",
  appId: "1:424867967222:web:7d4129e48a1dc3224c7cd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);