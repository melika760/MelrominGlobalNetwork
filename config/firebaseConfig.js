// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "freight2-f1599.firebaseapp.com",
  projectId: "freight2-f1599",
  storageBucket: "freight2-f1599.appspot.com",
  messagingSenderId: "887701892029",
  appId: "1:887701892029:web:451ea18065eddb5e8d80d4",
  measurementId: "G-V2V4MMTDJ5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);