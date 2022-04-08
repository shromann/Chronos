// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Y27C9OUSUFbLlkckYbkGQqzicWLsmYY",
  authDomain: "chronos-test-b20b1.firebaseapp.com",
  projectId: "chronos-test-b20b1",
  storageBucket: "chronos-test-b20b1.appspot.com",
  messagingSenderId: "35598864692",
  appId: "1:35598864692:web:2f38d4ffcb7735d1b49561",
  measurementId: "G-ES1MVLTTN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);