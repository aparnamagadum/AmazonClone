// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmL_zITmi3obSJNUC_ERUXrj2qxBG8g-U",
  authDomain: "clone-dc8b4.firebaseapp.com",
  projectId: "clone-dc8b4",
  storageBucket: "clone-dc8b4.firebasestorage.app",
  messagingSenderId: "490520693818",
  appId: "1:490520693818:web:47e88865245764831fb903",
  measurementId: "G-8SD1GFV8HD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
