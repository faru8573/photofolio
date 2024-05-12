// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJUMCzxspUzP_28il8CxFZHb_vhV_8QC0",
  authDomain: "photofolio-6a0c4.firebaseapp.com",
  projectId: "photofolio-6a0c4",
  storageBucket: "photofolio-6a0c4.appspot.com",
  messagingSenderId: "728607493189",
  appId: "1:728607493189:web:7207f818f143a00bfda72c",
  measurementId: "G-JJ2ZKC44JW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
