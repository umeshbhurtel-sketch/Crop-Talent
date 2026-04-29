// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVHStPRTNQq_dBepOy-PzKOHH4SCH5NSA",
  authDomain: "CorpTalents-taas.firebaseapp.com",
  projectId: "CorpTalents-taas",
  storageBucket: "CorpTalents-taas.firebasestorage.app",
  messagingSenderId: "876455705519",
  appId: "1:876455705519:web:3c2da88c5ebf2121e64d5a",
  measurementId: "G-2VQPM6QZ6S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
