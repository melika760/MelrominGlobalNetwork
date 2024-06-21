// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyAaJmNkfiuqsGub_ZI7G45GVAY2R_TgAt8",
  authDomain: "freight2-f1599.firebaseapp.com",
  projectId: "freight2-f1599",
  storageBucket: "freight2-f1599.appspot.com",
  messagingSenderId: "887701892029",
  appId: "1:887701892029:web:451ea18065eddb5e8d80d4",
  measurementId: "G-V2V4MMTDJ5"
};

// Initialize Firebase
const app =getApps().length? getApp(): initializeApp(firebaseConfig);
 const auth=getAuth();
 const db=getFirestore(app)
 export{app,auth,db}
