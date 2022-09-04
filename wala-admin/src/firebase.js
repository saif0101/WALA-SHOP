// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZeZm8pfXB582YeRh6riNOTKgXVohwoGI",
  authDomain: "wala-shop.firebaseapp.com",
  projectId: "wala-shop",
  storageBucket: "wala-shop.appspot.com",
  messagingSenderId: "835160719239",
  appId: "1:835160719239:web:8ce0fed6786e0c3cf61d22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;