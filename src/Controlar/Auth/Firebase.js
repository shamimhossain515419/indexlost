// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlvn18o2n0OyXaRqLsUoQEClID8zwf_WM",
  authDomain: "indexlost-17d33.firebaseapp.com",
  projectId: "indexlost-17d33",
  storageBucket: "indexlost-17d33.appspot.com",
  messagingSenderId: "958989207678",
  appId: "1:958989207678:web:a672d132160757c328702f",
  measurementId: "G-GECT6VEJ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;